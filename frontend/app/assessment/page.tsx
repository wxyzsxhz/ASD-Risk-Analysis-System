"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const circleSizes = [
    { size: "w-12 h-12", iconSize: "w-5 h-5" },
    { size: "w-10 h-10", iconSize: "w-4 h-4" },
    { size: "w-8 h-8", iconSize: "w-3 h-3" },
    { size: "w-10 h-10", iconSize: "w-4 h-4" },
    { size: "w-12 h-12", iconSize: "w-5 h-5" },
];

const questions = [
    { id: "A1", text: "Does your child look at you when you call his/her name?" },
    { id: "A2", text: "How easy is it for you to get eye contact with your child?" },
    { id: "A3", text: "Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)" },
    { id: "A4", text: "Does your child point to share interest with you? (e.g. pointing at an interesting sight)" },
    { id: "A5", text: "Does your child pretend? (e.g. care for dolls, talk on a toy phone)" },
    { id: "A6", text: "Does your child follow where you're looking?" },
    { id: "A7", text: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)" },
    { id: "A8", text: "Would you describe your child's first words as:" },
    { id: "A9", text: "Does your child use simple gestures? (e.g. wave goodbye)" },
    { id: "A10", text: "Does your child stare at nothing with no apparent purpose?" },
];

const options = [
    { value: 1, label: "Always" },
    { value: 2, label: "Usually" },
    { value: 3, label: "Sometimes" },
    { value: 4, label: "Rarely" },
    { value: 5, label: "Never" },
];

const Assessment = () => {
    const router = useRouter();
    const [answers, setAnswers] = useState<Record<string, number>>({});

    const handleSelect = (questionId: string, value: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        const unanswered = questions.filter((q) => !answers[q.id]);
        if (unanswered.length > 0) {
            alert(`Please answer all questions. ${unanswered.length} remaining.`);
            return;
        }

        const encodedAnswers = encodeURIComponent(JSON.stringify(answers));
        router.push(`/result?answers=${encodedAnswers}`);
    };

    const progress = (Object.keys(answers).length / questions.length) * 100;

    return (
        <main className="min-h-screen px-4 md:px-12 lg:px-20 py-8 pb-3">
            <div className="sticky top-0 z-40 bg-[#d0e9fc] px-4 pt-20 pb-1">
                <header className="justify-center text-center">
                    <h1 className="text-2xl font-bold text-[#4b4b4b]">
                        ASD Screening Assessment
                    </h1>
                </header>

                <div className="mb-8">
                    <div className="flex justify-between text-sm text-[#4b4b4b] mb-2">
                        <span>Progress</span>
                        <span>
                            {Object.keys(answers).length} of {questions.length} answered
                        </span>
                    </div>

                    <div className="h-2 bg-[#4b4b4b] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#B9E4C9] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4 px-4">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className={cn(
                            "bg-[#f1fafe] rounded-xl p-5 shadow-sm transition-all",
                            answers[question.id] && "ring-2 ring-[#B9E4C9]/30"
                        )}
                    >
                        <div className="flex gap-3 mb-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B9E4C9] text-[#4b4b4b] flex items-center justify-center font-semibold text-sm">
                                {question.id}
                            </span>
                            <p className="text-[#4b4b4b] leading-relaxed pt-2">
                                {question.text}
                            </p>
                        </div>

                        <div className="flex items-center justify-between max-w-md mx-auto mt-4">
                            {options.map((opt, optIndex) => (
                                <button
                                    key={opt.value}
                                    onClick={() => handleSelect(question.id, opt.value)}
                                    className="flex flex-col items-center gap-1 group"
                                    aria-label={opt.label}
                                >
                                    <div
                                        className={cn(
                                            "rounded-full border-2 transition-all flex items-center justify-center",
                                            circleSizes[optIndex].size,
                                            answers[question.id] === opt.value
                                                ? "bg-[#B9E4C9] border-[#B9E4C9]/90 group-hover:scale-110"
                                                : "border-[#B9E4C9]/60 hover:border-[#B9E4C9] group-hover:scale-110"
                                        )}
                                    >
                                        {answers[question.id] === opt.value && (
                                            <Check
                                                className={cn(
                                                    "text-[#4b4b4b]",
                                                    circleSizes[optIndex].iconSize
                                                )}
                                            />
                                        )}
                                    </div>
                                    <span
                                        className={cn(
                                            "text-xs transition-colors",
                                            answers[question.id] === opt.value
                                                ? "text-[#4b4b4b] font-medium"
                                                : "text-[#4b4b4b]/60 hover:text-[#4b4b4b]"
                                        )}
                                    >
                                        {opt.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pb-8 flex justify-center">
                <Link href="/result"> 
                <Button
                    onClick={handleSubmit}
                    className="bg-[#B9E4C9] text-[#4b4b4b] hover:bg-[#B9E4C9]/90 font-semibold cursor-pointer py-6 px-35 text-lg flex items-center gap-2"
                    disabled={Object.keys(answers).length < questions.length}
                >
                    Submit Assessment
                </Button>
                </Link>
            </div>

            {Object.keys(answers).length < questions.length && (
                <p className="text-center text-[#4b4b4b]/60 text-sm">
                    Please answer all questions to submit
                </p>
            )}
        </main>
    );
};

export default Assessment;
