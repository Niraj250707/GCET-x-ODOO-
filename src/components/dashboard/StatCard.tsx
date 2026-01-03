import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "primary" | "success" | "warning" | "danger" | "purple";
  className?: string;
}

const variantStyles = {
  primary: "gradient-primary",
  success: "gradient-success",
  warning: "gradient-warning",
  danger: "gradient-danger",
  purple: "gradient-purple",
};

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  variant = "primary",
  className,
}: StatCardProps) {
  return (
    <div className={cn("stat-card text-white", variantStyles[variant], className)}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="40" fill="currentColor" />
          <circle cx="100" cy="60" r="30" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
          {icon}
        </div>

        {/* Title */}
        <p className="text-sm text-white/80 font-medium">{title}</p>

        {/* Value */}
        <div className="flex items-end gap-2 mt-1">
          <h3 className="text-3xl font-bold font-display">{value}</h3>
          {trend && (
            <div className={cn(
              "flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full mb-1",
              trend.isPositive ? "bg-white/20" : "bg-black/20"
            )}>
              {trend.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {trend.value}%
            </div>
          )}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-white/60 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
