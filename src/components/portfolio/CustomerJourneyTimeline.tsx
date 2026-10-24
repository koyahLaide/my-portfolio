"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LifeBuoy, Megaphone, ShoppingBag, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type EventType = "onboarding" | "order" | "support" | "marketing";

type JourneyEvent = {
  id: string;
  type: EventType;
  title: string;
  description: string;
  time: string;
  meta?: string;
};

const TYPE_CONFIG: Record<
  EventType,
  { icon: typeof UserPlus; label: string; bg: string; fg: string }
> = {
  onboarding: {
    icon: UserPlus,
    label: "Onboarding",
    bg: "bg-emerald-500/10",
    fg: "text-emerald-600 dark:text-emerald-400",
  },
  order: {
    icon: ShoppingBag,
    label: "Order",
    bg: "bg-blue-500/10",
    fg: "text-blue-600 dark:text-blue-400",
  },
  support: {
    icon: LifeBuoy,
    label: "Support",
    bg: "bg-amber-500/10",
    fg: "text-amber-600 dark:text-amber-400",
  },
  marketing: {
    icon: Megaphone,
    label: "Marketing",
    bg: "bg-violet-500/10",
    fg: "text-violet-600 dark:text-violet-400",
  },
};

const EVENTS: JourneyEvent[] = [
  {
    id: "e1",
    type: "onboarding",
    title: "Account created",
    description: "Signed up from the Spring Sale landing page with a 10% first-order coupon.",
    time: "Mar 3, 9:12 AM",
  },
  {
    id: "e2",
    type: "marketing",
    title: "Opened “Spring Sale — 20% off” email",
    description: "Clicked through to the Trail Runner collection.",
    time: "Mar 3, 9:41 AM",
  },
  {
    id: "e3",
    type: "order",
    title: "Placed order #1042",
    description: "Trail Runner Pro + Grip Socks · 3-day shipping.",
    time: "Mar 4, 2:15 PM",
    meta: "$128.40",
  },
  {
    id: "e4",
    type: "order",
    title: "Order #1042 delivered",
    description: "Left at front door · marked as delivered.",
    time: "Mar 7, 11:03 AM",
  },
  {
    id: "e5",
    type: "support",
    title: "Opened ticket #318",
    description: "Sizing question — runs half a size small.",
    time: "Mar 9, 6:22 PM",
  },
  {
    id: "e6",
    type: "support",
    title: "Ticket #318 resolved",
    description: "Sent the size chart and offered a free exchange.",
    time: "Mar 10, 9:05 AM",
  },
  {
    id: "e7",
    type: "marketing",
    title: "Entered “Win-back” segment",
    description: "No purchase in 30 days · targeted with a $10 incentive.",
    time: "Apr 8, 8:00 AM",
  },
  {
    id: "e8",
    type: "order",
    title: "Placed order #1079",
    description: "Trail Runner Pro, sized up · used the win-back code.",
    time: "Apr 11, 1:47 PM",
    meta: "$64.00",
  },
  {
    id: "e9",
    type: "marketing",
    title: "Left a 5-star review",
    description: "“Perfect fit after the exchange — fast shipping.”",
    time: "Apr 14, 10:20 AM",
  },
];

const TABS: { key: string; label: string; types: EventType[] }[] = [
  { key: "all", label: "All", types: ["onboarding", "order", "support", "marketing"] },
  { key: "orders", label: "Orders", types: ["order"] },
  { key: "support", label: "Support", types: ["support"] },
  { key: "marketing", label: "Marketing", types: ["marketing", "onboarding"] },
];

export default function CustomerJourneyTimeline() {
  const [activeTab, setActiveTab] = useState("all");

  const active = TABS.find((t) => t.key === activeTab) ?? TABS[0];
  const filtered = useMemo(
    () => EVENTS.filter((e) => active.types.includes(e.type)),
    [active]
  );
  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const t of TABS) {
      map[t.key] = EVENTS.filter((e) => t.types.includes(e.type)).length;
    }
    return map;
  }, []);

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Customer profile header */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          MR
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-semibold">Maria Rivera</p>
            <Badge className="bg-emerald-500/90 px-1.5 py-0 text-[10px] text-white">
              VIP
            </Badge>
          </div>
          <p className="truncate text-xs text-muted-foreground">
            maria.rivera@example.com · Customer since Mar 2026
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-4 text-right sm:flex">
          <div>
            <p className="text-sm font-semibold leading-tight">$192.40</p>
            <p className="text-[11px] text-muted-foreground">Lifetime value</p>
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">2</p>
            <p className="text-[11px] text-muted-foreground">Orders</p>
          </div>
        </div>
      </div>

      {/* Synced filter tabs */}
      <div className="flex items-center justify-between gap-2 px-4 pt-3">
        <div className="inline-flex rounded-lg border border-border bg-muted p-1">
          {TABS.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
                <span
                  className={`text-[10px] tabular-nums ${
                    isActive ? "text-foreground/70" : "text-muted-foreground/70"
                  }`}
                >
                  {counts[t.key]}
                </span>
              </button>
            );
          })}
        </div>
        <span className="hidden text-[11px] text-muted-foreground sm:inline">
          {filtered.length} of {EVENTS.length} events
        </span>
      </div>

      {/* Vertical timeline */}
      <div className="px-4 py-4">
        <p className="mb-3 text-[11px] uppercase tracking-wide text-muted-foreground">
          Customer journey
        </p>
        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-2 left-[15px] top-2 w-px bg-border"
          />
          <ul className="relative space-y-1">
            <AnimatePresence initial={false}>
              {filtered.map((ev) => {
                const cfg = TYPE_CONFIG[ev.type];
                const Icon = cfg.icon;
                return (
                  <motion.li
                    key={ev.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="relative flex gap-3 pb-4 last:pb-0"
                  >
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border ${cfg.bg}`}
                    >
                      <Icon className={`h-4 w-4 ${cfg.fg}`} />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium">{ev.title}</p>
                        <Badge
                          variant="secondary"
                          className="text-[10px] font-normal"
                        >
                          {cfg.label}
                        </Badge>
                      </div>
                      <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                        {ev.description}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/80">
                        {ev.time}
                        {ev.meta ? ` · ${ev.meta}` : ""}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        </div>
      </div>

      {/* Footer note */}
      <div className="flex items-center justify-between border-t border-border bg-muted/40 px-4 py-2">
        <span className="text-[11px] text-muted-foreground">
          Interactive demo · sample data
        </span>
        <span className="text-[11px] text-muted-foreground">
          Customer Journey Timeline
        </span>
      </div>
    </div>
  );
}
