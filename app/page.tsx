"use client";

import React, { useState, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  category: string;
  dueDate?: string;
  createdAt: string;
}

interface Toast {
  id: string;
  message: string;
  type: "success" | "info" | "error";
}

const CATEGORIES = [
  { name: "Work", icon: "💼" },
  { name: "Personal", icon: "👤" },
  { name: "Health", icon: "🌱" },
  { name: "Finance", icon: "🪙" },
  { name: "Ideas", icon: "💡" },
];

const INITIAL_TODOS: Todo[] = [
  {
    id: "1",
    title: "Design premium landing page mockup",
    description: "Create a beautiful glassmorphic hero section for the portfolio website.",
    completed: false,
    priority: "high",
    category: "Work",
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0], // 2 days from now
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Morning 5k running and exercise",
    description: "Interval training session followed by yoga stretch.",
    completed: true,
    priority: "medium",
    category: "Health",
    dueDate: new Date().toISOString().split("T")[0], // Today
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    title: "Read Chapter 4 of Clean Architecture",
    description: "Focus on components cohesion and coupling principles.",
    completed: false,
    priority: "low",
    category: "Ideas",
    dueDate: new Date(Date.now() + 86400000 * 5).toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [mounted, setMounted] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  // Filters & Search State
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "completed">("all");
  const [sortBy, setSortBy] = useState<"dueDate" | "priority" | "createdAt">("dueDate");

  // Editing State
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");
  const [editingPriority, setEditingPriority] = useState<"low" | "medium" | "high">("medium");
  const [editingCategory, setEditingCategory] = useState("Work");
  const [editingDueDate, setEditingDueDate] = useState("");

  // Toast Notifications
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Load from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("apex-todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        setTodos(INITIAL_TODOS);
      }
    } else {
      setTodos(INITIAL_TODOS);
    }
    
    setMounted(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("apex-todos", JSON.stringify(todos));
    }
  }, [todos, mounted]);

  const addToast = (message: string, type: "success" | "info" | "error" = "success") => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      addToast("Please enter a task title", "error");
      return;
    }

    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title: title.trim(),
      description: description.trim() || undefined,
      completed: false,
      priority,
      category,
      dueDate: dueDate || undefined,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
    setDescription("");
    setPriority("medium");
    setCategory("Work");
    setDueDate("");
    addToast("Task created successfully!");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const completed = !todo.completed;
          addToast(
            completed ? "Task completed! 🎉" : "Task marked active",
            completed ? "success" : "info"
          );
          return { ...todo, completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    addToast("Task deleted", "info");
  };

  const startEditing = (todo: Todo) => {
    setEditingTodoId(todo.id);
    setEditingTitle(todo.title);
    setEditingDescription(todo.description || "");
    setEditingPriority(todo.priority);
    setEditingCategory(todo.category);
    setEditingDueDate(todo.dueDate || "");
  };

  const saveEdit = (id: string) => {
    if (!editingTitle.trim()) {
      addToast("Title cannot be empty", "error");
      return;
    }

    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: editingTitle.trim(),
            description: editingDescription.trim() || undefined,
            priority: editingPriority,
            category: editingCategory,
            dueDate: editingDueDate || undefined,
          };
        }
        return todo;
      })
    );
    setEditingTodoId(null);
    addToast("Task updated!");
  };

  // Helper values & calculations
  const totalTasks = todos.length;
  const completedTasks = todos.filter((t) => t.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const pendingTasks = totalTasks - completedTasks;

  // Sorting & Filtering
  const getPriorityWeight = (p: "low" | "medium" | "high") => {
    if (p === "high") return 3;
    if (p === "medium") return 2;
    return 1;
  };

  const filteredTodos = todos
    .filter((todo) => {
      const matchesSearch =
        todo.title.toLowerCase().includes(search.toLowerCase()) ||
        (todo.description && todo.description.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = filterCategory === "All" || todo.category === filterCategory;
      const matchesPriority = filterPriority === "All" || todo.priority === filterPriority;
      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "active" && !todo.completed) ||
        (filterStatus === "completed" && todo.completed);

      return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "dueDate") {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      if (sortBy === "priority") {
        return getPriorityWeight(b.priority) - getPriorityWeight(a.priority);
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  // Calculate if due date is overdue, today, or upcoming
  const getDueDateBadge = (dueDateString?: string) => {
    if (!dueDateString) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDateString);
    due.setHours(0, 0, 0, 0);
    
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return (
        <span className="chip-mono bg-rose-500/10 text-rose-600 dark:text-rose-400">
          ⚠️ Overdue ({Math.abs(diffDays)}d ago)
        </span>
      );
    } else if (diffDays === 0) {
      return (
        <span className="chip-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
          ⚡ Today
        </span>
      );
    } else if (diffDays === 1) {
      return (
        <span className="chip-mono bg-slate-500/10 text-slate-600 dark:text-slate-400">
          📅 Tomorrow
        </span>
      );
    } else {
      return (
        <span className="chip-mono bg-slate-500/10 text-slate-600 dark:text-slate-400">
          📅 In {diffDays}d
        </span>
      );
    }
  };

  if (!mounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-surface text-on-surface">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          <p className="typ-label-mono text-on-surface-variant">Loading Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-background px-5 py-16 sm:px-8">
      
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 rounded px-4 py-3 shadow-level-1 border bg-surface-container-lowest animate-slide-in ${
              toast.type === "success"
                ? "border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                : toast.type === "error"
                ? "border-error/30 text-error"
                : "border-outline-variant text-on-surface"
            }`}
          >
            <span className="typ-label-mono text-xs">
              {toast.type === "success" ? "DONE" : toast.type === "error" ? "FAIL" : "INFO"} //
            </span>
            <p className="typ-label-mono text-xs">{toast.message}</p>
          </div>
        ))}
      </div>

      {/* Main Grid Container - Centered, 1120px Max Desktop Width */}
      <div className="mx-auto max-w-[1120px]">
        
        {/* Navigation & Brand Header */}
        <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-surface-container-high pb-8 mb-16 gap-4">
          <div>
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1.5">
              Workplace / Index
            </div>
            <h1 className="typ-display text-primary">
              Paper & Syntax
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="typ-label-mono text-[11px] text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">
              v1.0.0
            </span>
            
            {/* Minimalist Version Tag */}
          </div>
        </header>

        {/* Dashboard Stats Block - Technical manuscript look */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-16 border-b border-surface-container-high pb-12">
          <div>
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase">01 / TOTAL_TASKS</div>
            <div className="typ-h1 mt-2 text-primary">{totalTasks}</div>
          </div>
          <div>
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase">02 / COMPLETED</div>
            <div className="typ-h1 mt-2 text-primary">{completedTasks}</div>
          </div>
          <div>
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase">03 / ACTIVE_PENDING</div>
            <div className="typ-h1 mt-2 text-primary">{pendingTasks}</div>
          </div>
          <div>
            <div className="typ-label-mono text-xs text-on-surface-variant uppercase">04 / RATE_OF_COMPLETION</div>
            <div className="typ-h1 mt-2 text-primary">
              {completionRate}%
            </div>
            <div className="w-24 h-1 bg-surface-container-high rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Main Workspace Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Task Creation Drawer (Paper Card style) */}
          <aside className="lg:col-span-4">
            <div className="card-paper sticky top-6">
              <h2 className="typ-h2 mb-6 border-b border-surface-container pb-3 text-primary">
                New Entry
              </h2>

              <form onSubmit={handleAddTodo} className="space-y-6">
                
                {/* Task Title */}
                <div className="flex flex-col">
                  <label htmlFor="title-input" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
                    Task Description *
                  </label>
                  <input
                    id="title-input"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Describe your task briefly..."
                    className="input-minimal typ-body-md"
                  />
                </div>

                {/* Optional Details */}
                <div className="flex flex-col">
                  <label htmlFor="desc-input" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="desc-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter context, criteria, or steps..."
                    rows={3}
                    className="input-minimal typ-body-md resize-none py-2"
                  />
                </div>

                {/* Priority Selection */}
                <div>
                  <label className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-3 block">
                    Priority Rating
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["low", "medium", "high"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPriority(p)}
                        className={`typ-label-mono text-xs py-2 border rounded transition-all capitalize ${
                          priority === p
                            ? "bg-primary text-on-primary border-primary"
                            : "border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Selector */}
                <div className="flex flex-col">
                  <label htmlFor="category-select" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
                    Classification Tag
                  </label>
                  <select
                    id="category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input-minimal typ-body-md cursor-pointer text-sm"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.name} value={cat.name} className="bg-surface text-on-surface">
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Due Date Calendar */}
                <div className="flex flex-col">
                  <label htmlFor="due-date-input" className="typ-label-mono text-[11px] uppercase text-on-surface-variant mb-2">
                    Fulfillment Date
                  </label>
                  <input
                    id="due-date-input"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="input-minimal typ-body-md text-sm"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-primary w-full mt-4"
                >
                  COMMIT_ENTRY
                </button>
              </form>
            </div>
          </aside>

          {/* Right Column: Interactive Registry & Filters */}
          <main className="lg:col-span-8">
            <div className="card-paper">
              
              {/* Toolbar Controls - Editorial layout */}
              <div className="flex flex-col gap-6 border-b border-surface-container pb-8 mb-8">
                
                {/* Search Bar & Sort Menu */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="SEARCH_REGISTRY_KEYWORD..."
                      className="w-full input-minimal typ-label-mono uppercase text-xs tracking-wider placeholder:text-outline-variant"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label htmlFor="sort-dropdown" className="typ-label-mono text-xs text-on-surface-variant uppercase whitespace-nowrap">
                      SORT:
                    </label>
                    <select
                      id="sort-dropdown"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="input-minimal typ-label-mono text-xs py-1 cursor-pointer"
                    >
                      <option value="dueDate">DUE_DATE</option>
                      <option value="priority">PRIORITY_RATING</option>
                      <option value="createdAt">CREATION_DATE</option>
                    </select>
                  </div>
                </div>

                {/* Tabs & Classifiers */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  
                  {/* Status Toggle Switch */}
                  <div className="flex border border-outline-variant rounded p-0.5 bg-surface-container-low">
                    {(["all", "active", "completed"] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`typ-label-mono text-[10px] uppercase px-3 py-1.5 rounded transition-all ${
                          filterStatus === status
                            ? "bg-primary text-on-primary"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Category & Priority Filters */}
                  <div className="flex items-center gap-3">
                    <select
                      aria-label="Filter Classification"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="input-minimal typ-label-mono text-[11px]"
                    >
                      <option value="All">ALL_CLASSIFICATIONS</option>
                      {CATEGORIES.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name.toUpperCase()}
                        </option>
                      ))}
                    </select>

                    <select
                      aria-label="Filter Priority Rating"
                      value={filterPriority}
                      onChange={(e) => setFilterPriority(e.target.value)}
                      className="input-minimal typ-label-mono text-[11px]"
                    >
                      <option value="All">ALL_PRIORITIES</option>
                      <option value="high">HIGH</option>
                      <option value="medium">MEDIUM</option>
                      <option value="low">LOW</option>
                    </select>
                  </div>

                </div>

              </div>

              {/* Task Registry Log list */}
              <div className="divide-y divide-surface-container">
                {filteredTodos.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="typ-label-mono text-xs text-outline mb-3">
                      [REGISTRY_EMPTY]
                    </div>
                    <p className="typ-body-md text-on-surface-variant max-w-sm">
                      No matching records found. Please adjust filters or compile a new entry.
                    </p>
                  </div>
                ) : (
                  filteredTodos.map((todo) => {
                    const isEditing = editingTodoId === todo.id;
                    const catInfo = CATEGORIES.find((c) => c.name === todo.category) || CATEGORIES[0];

                    return (
                      <div
                        key={todo.id}
                        className={`py-6 transition-all duration-200 ${
                          todo.completed ? "opacity-50" : ""
                        }`}
                      >
                        {isEditing ? (
                          /* INLINE EDIT FORM */
                          <div className="space-y-4 bg-surface-container-low p-5 rounded border border-outline-variant/30">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex flex-col">
                                <label className="typ-label-mono text-[10px] text-on-surface-variant uppercase mb-1">
                                  Task Title
                                </label>
                                <input
                                  type="text"
                                  value={editingTitle}
                                  onChange={(e) => setEditingTitle(e.target.value)}
                                  className="input-minimal typ-body-md bg-surface px-2 py-1.5"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="typ-label-mono text-[10px] text-on-surface-variant uppercase mb-1">
                                  Classification
                                </label>
                                <select
                                  value={editingCategory}
                                  onChange={(e) => setEditingCategory(e.target.value)}
                                  className="input-minimal typ-body-md bg-surface px-2 py-1.5"
                                >
                                  {CATEGORIES.map((c) => (
                                    <option key={c.name} value={c.name}>
                                      {c.icon} {c.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <label className="typ-label-mono text-[10px] text-on-surface-variant uppercase mb-1">
                                Description
                              </label>
                              <textarea
                                value={editingDescription}
                                onChange={(e) => setEditingDescription(e.target.value)}
                                rows={2}
                                className="input-minimal typ-body-md bg-surface px-2 py-1.5 resize-none"
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="typ-label-mono text-[10px] text-on-surface-variant uppercase mb-2 block">
                                  Priority Rating
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                  {(["low", "medium", "high"] as const).map((p) => (
                                    <button
                                      key={p}
                                      type="button"
                                      onClick={() => setEditingPriority(p)}
                                      className={`typ-label-mono text-xs py-1.5 border rounded transition-all capitalize ${
                                        editingPriority === p
                                          ? "bg-primary text-on-primary border-primary"
                                          : "border-outline-variant bg-surface text-on-surface-variant"
                                      }`}
                                    >
                                      {p}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col">
                                <label className="typ-label-mono text-[10px] text-on-surface-variant uppercase mb-1">
                                  Fulfillment Date
                                </label>
                                <input
                                  type="date"
                                  value={editingDueDate}
                                  onChange={(e) => setEditingDueDate(e.target.value)}
                                  className="input-minimal typ-body-md bg-surface px-2 py-1.5"
                                />
                              </div>
                            </div>

                            {/* Controls */}
                            <div className="flex justify-end gap-2 pt-2">
                              <button
                                onClick={() => setEditingTodoId(null)}
                                className="btn-secondary py-1.5 px-3 text-xs"
                              >
                                CANCEL
                              </button>
                              <button
                                onClick={() => saveEdit(todo.id)}
                                className="btn-primary py-1.5 px-3 text-xs"
                              >
                                SAVE_CHANGES
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* REGISTRY ENTRY ROW */
                          <div className="flex items-start gap-5">
                            
                            {/* Minimalist Checkbox Indicator */}
                            <button
                              onClick={() => toggleTodo(todo.id)}
                              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors active:scale-95 hover:bg-surface-container"
                              style={{
                                borderColor: "var(--primary)",
                                backgroundColor: todo.completed ? "var(--primary)" : "transparent"
                              }}
                              aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
                            >
                              {todo.completed && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3.5 h-3.5 text-on-primary">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                              )}
                            </button>

                            {/* Details text block */}
                            <div className="flex-1 min-w-0">
                              
                              {/* Metadata tags line */}
                              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                                <span className="chip-mono">
                                  {catInfo.icon} {todo.category.toUpperCase()}
                                </span>

                                <span className={`typ-label-mono text-[10px] uppercase font-semibold ${
                                  todo.priority === "high"
                                    ? "text-error"
                                    : todo.priority === "medium"
                                    ? "text-amber-600 dark:text-amber-400"
                                    : "text-on-surface-variant"
                                }`}>
                                  [{todo.priority}]
                                </span>

                                {todo.dueDate && !todo.completed && (
                                  <>
                                    <span className="typ-label-mono text-[10px] text-outline">•</span>
                                    {getDueDateBadge(todo.dueDate)}
                                  </>
                                )}
                              </div>

                              {/* Task Title (Literata font) */}
                              <h3
                                className={`typ-body-lg font-semibold leading-relaxed break-words text-primary ${
                                  todo.completed ? "line-through text-outline" : ""
                                }`}
                              >
                                {todo.title}
                              </h3>

                              {/* Task Description (Literata font) */}
                              {todo.description && (
                                <p className={`typ-body-md mt-1.5 leading-relaxed text-on-surface-variant max-w-3xl break-words ${
                                  todo.completed ? "text-outline/80" : ""
                                }`}>
                                  {todo.description}
                                </p>
                              )}
                            </div>

                            {/* Minimal Hover Controls */}
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => startEditing(todo)}
                                className="typ-label-mono text-xs border border-transparent px-2 py-1 rounded hover:border-primary text-on-surface-variant hover:text-primary transition-all"
                                title="Edit Entry"
                              >
                                [EDIT]
                              </button>
                              <button
                                onClick={() => deleteTodo(todo.id)}
                                className="typ-label-mono text-xs border border-transparent px-2 py-1 rounded hover:border-error text-on-surface-variant hover:text-error transition-all"
                                title="Delete Entry"
                              >
                                [DEL]
                              </button>
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
