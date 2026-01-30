"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* ------------------ Mock Data ------------------ */

const mockResults = [
  {
    id: "1",
    childName: "Emma Johnson",
    date: "2026-01-28T14:30:00",
    level: 2,
    riskPercent: 58,
  },
  {
    id: "2",
    childName: "Liam Smith",
    date: "2026-01-27T10:15:00",
    level: 1,
    riskPercent: 32,
  },
  {
    id: "3",
    childName: "Emma Johnson",
    date: "2026-01-25T09:00:00",
    level: 2,
    riskPercent: 62,
  },
  {
    id: "4",
    childName: "Olivia Brown",
    date: "2026-01-24T16:45:00",
    level: 3,
    riskPercent: 78,
  },
  {
    id: "5",
    childName: "Noah Davis",
    date: "2026-01-22T11:30:00",
    level: 1,
    riskPercent: 28,
  },
  {
    id: "6",
    childName: "Liam Smith",
    date: "2026-01-20T13:00:00",
    level: 2,
    riskPercent: 55,
  },
];

/* ------------------ Helpers ------------------ */

const getLevelInfo = (level: number) => {
  switch (level) {
    case 1:
      return { label: "Mild", color: "text-green-600", bgColor: "bg-green-100" };
    case 2:
      return { label: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-100" };
    case 3:
      return { label: "Severe", color: "text-red-600", bgColor: "bg-red-100" };
    default:
      return { label: "Unknown", color: "text-muted-foreground", bgColor: "bg-muted" };
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/* ------------------ Page ------------------ */

export default function History() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = useMemo(() => {
    const sorted = [...mockResults].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (!searchQuery.trim()) return sorted;

    return sorted.filter((result) =>
      result.childName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen pt-20 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl text-[#4b4b4b] text-center font-bold mt-4">
          Assessment History
        </h1>
      </header>

      {/* Search Filter */}
      <div className="mb-6 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4b4b4b]" />
          <Input
            type="text"
            placeholder="Filter by child's name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Results Grid */}
      {filteredResults.length === 0 ? (
        <p className="text-center text-[#4b4b4b] py-10">
          No results found for "{searchQuery}"
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredResults.map((result) => {
            const levelInfo = getLevelInfo(result.level);

            return (
              <Card key={result.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow ">
                <CardContent className="p-5 bg-[#f1fafe] border-[#e2e9fe] group-hover:scale-110 transition-transform">
                  {/* Child Name & Date */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#4b4b4b] mb-1">
                      {result.childName}
                    </h3>
                    <p className="text-sm text-[#4b4b4b]">
                      {formatDate(result.date)}
                    </p>
                  </div>

                  {/* Level & Risk */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-[#4b4b4b] mb-1">
                        ASD Level
                      </p>
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-sm font-medium",
                          levelInfo.bgColor,
                          levelInfo.color
                        )}
                      >
                        Level {result.level} ({levelInfo.label})
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-[#4b4b4b] mb-1">
                        Risk Analysis
                      </p>
                      <p className="text-2xl font-bold text-[#4b4b4b]">
                        {result.riskPercent}%
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/article/level-${result.level}`}
                    className="flex items-center gap-1 text-sm text-[#4b4b4b] hover:underline"
                  >
                    More Details
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}
