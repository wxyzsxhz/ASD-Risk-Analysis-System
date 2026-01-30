"use client";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChildCard } from "@/components/ChildCard";

interface Child {
    id: number;
    name: string;
    age: number;
}

const Index = () => {
    const [children, setChildren] = useState<Child[]>([
        { id: 1, name: "Child A", age: 4 },
        { id: 2, name: "Child B", age: 6 },
        { id: 3, name: "Child C", age: 5 },
    ]);

    const handleDelete = (id: number) => {
        setChildren(children.filter((c) => c.id !== id));
    };

    const handleAddChild = () => {
        const newId = Math.max(0, ...children.map(c => c.id)) + 1;
        setChildren([...children, { id: newId, name: `Child ${String.fromCharCode(64 + newId)}`, age: 3 }]);
    };

    return (
        <main className="min-h-screen pt-20 px-6 md:px-12 lg:px-20 py-8">
            {/* Header */}
            <header className="mb-4">
                <div className="flex items-center gap-3 mb-1 text-[#4b4b4b]">
                    <div className="w-10 h-10 rounded-full bg-[#f38081] flex items-center justify-center">
                        <User className="w-4 h-4 text-[#f1fafe]" />
                    </div>
                    <h1 className="text-xl font-bold">Parent Dashboard</h1>
                </div>
            </header>

            {/* Parent Info Card */}
            <section className="rounded-2xl p-6 mb-8 shadow-lg bg-[#4b4b4b] text-[#f1fafe]">
                <div className="space-y-1 opacity-90">
                    <p>Name: Jane Doe</p>
                    <p>Email: janedoe@email.com</p>
                </div>

                <Button
                    asChild
                    className="mt-5 bg-[#f38081] text-[#f1fafe] hover:opacity-70 active:opacity-70 transition-opacity font-medium"
                >
                    <Link href="/history">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View Assessment History
                    </Link>
                </Button>
            </section>

            {/* Children Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-[#4b4b4b]">Child Profiles</h2>

                    <Button
                        onClick={handleAddChild}
                        className="bg-[#f38081] text-[#f1fafe] hover:bg-[#4b4b4b]/90 font-medium"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Child Profile
                    </Button>
                </div>

                {children.length === 0 ? (
                    <div className="text-center py-12 bg-card rounded-2xl shadow-md">
                        <p className="text-[#4b4b4b] mb-4">No child profiles yet</p>
                        <Link href="/createProfile">
                        <Button
                            onClick={handleAddChild}
                            variant="outline"
                            className="border-[#f38081] text-[#f38081] hover:bg-[#f38081] hover:text-[#f1fafe]"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Your First Child
                        </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {children.map((child) => (
                            <ChildCard
                                key={child.id}
                                id={child.id}
                                name={child.name}
                                age={child.age}
                                onDelete={handleDelete}

                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Index;
