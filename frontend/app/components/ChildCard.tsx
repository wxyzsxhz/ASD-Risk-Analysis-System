"use client";
import Link from "next/link";
import { use, useState } from "react";
import { MoreVertical, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChildCardProps {
    id: number;
    name: string;
    age: number;
    onDelete: (id: number) => void;
}

export function ChildCard({ id, name, age, onDelete }: ChildCardProps) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative rounded-2xl p-5 shadow-md bg-[#f1fafe] flex flex-col">
            {/* 3-dot menu */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-1 rounded-full hover:bg-[#d0e9fc] transition-colors"
                >
                    <MoreVertical className="w-5 h-5 text-[#4b4b4b]" />
                </button>

                {showMenu && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setShowMenu(false)}
                        />
                        <div className="absolute right-0 mt-1 z-20 bg-card rounded-lg shadow-lg border border-[#f38081] overflow-hidden">
                            <button
                                onClick={() => {
                                    onDelete(id);
                                    setShowMenu(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-[#f38081] hover:bg-muted transition-colors w-full"
                            >
                                <Trash2 size={14} />
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>

            <h3 className="text-lg font-semibold text-[#4b4b4b] mb-1">{name}</h3>
            <p className="text-sm text-[#4b4b4b] mb-5">Age: {age} years</p>

            <Button
                asChild
                className="w-full bg-[#EFD780] text-[#4b4b4b] hover:bg-[#4b4b4b]/90 hover:text-[#f1fafe] font-semibold transition-colors">
                <Link href="/assessment">
                    Take Assessment
                </Link>
            </Button>
        </div>
    );
}
