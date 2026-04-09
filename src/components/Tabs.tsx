"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
  description?: string;
  badge?: string;
  content: React.ReactNode;
};

export type TabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
  tabListClassName?: string;
  tabPanelClassName?: string;
  onTabChange?: (tabId: string) => void;
};

export function Tabs({
  tabs,
  defaultTabId,
  className,
  tabListClassName,
  tabPanelClassName,
  onTabChange,
}: TabsProps) {
  const initialTabId = useMemo(() => {
    if (defaultTabId && tabs.some((tab) => tab.id === defaultTabId)) {
      return defaultTabId;
    }
    return tabs[0]?.id ?? "";
  }, [defaultTabId, tabs]);

  const [activeTabId, setActiveTabId] = useState(initialTabId);

  if (tabs.length === 0) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm",
          className,
        )}
      >
        No tabs available.
      </div>
    );
  }

  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Content tabs"
        className={cn(
          "flex flex-wrap gap-2 rounded-2xl border border-border bg-muted/40 p-2",
          tabListClassName,
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "group flex min-w-0 flex-1 items-start gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/70 hover:text-foreground",
              )}
            >
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  {tab.label}
                  {tab.badge ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                      {tab.badge}
                    </span>
                  ) : null}
                </span>
                {tab.description ? (
                  <span className="line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {tab.description}
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`tab-panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.id}`}
        className={cn(
          "mt-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6",
          tabPanelClassName,
        )}
      >
        {activeTab.content}
      </div>
    </div>
  );
}

export default Tabs;
