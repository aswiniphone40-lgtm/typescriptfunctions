/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */


const submissions = [
    { student: "Alya", submitted: true, score: 90 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 84 },
    { student: "Dimas", submitted: true, score: 72 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 96 }
];

type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};

function countTotalStudents(submissions: Submission[]) {
    return submissions.length;
}

function countSubmitted(submissions: Submission[]) {
    return submissions.filter(s => s.submitted === true).length;
}

function countMissing(submissions: Submission[]) {
    return submissions.filter(s => s.submitted === false).length;
}

function countPassed(submissions: Submission[]) {
    return submissions.filter(s => s.submitted && s.score >= 75).length;
}

function countRevision(submissions: Submission[]) {
    return submissions.filter(s => s.submitted && s.score < 75).length;
}

function calculateAverage(submissions: Submission[]) {
    if (submissions.length === 0) return 0;

    const total = submissions.reduce((sum, s) => sum + s.score, 0);
    return total / submissions.length;
}

function getHighestScore(submissions: Submission[]) {
    return Math.max(...submissions.map(s => s.score));
}

function getLowestScore(submissions: Submission[]) {
    return Math.min(...submissions.map(s => s.score));
}

function displayReport(submissions: Submission[]) {
    console.log("===== ASSIGNMENT REPORT =====");
    console.log("Total Students:", countTotalStudents(submissions));
    console.log("Submitted Assignments:", countSubmitted(submissions));
    console.log("Missing Assignments:", countMissing(submissions));
    console.log("Passed Students:", countPassed(submissions));
    console.log("Require Revision:", countRevision(submissions));
    console.log("Average Score:", calculateAverage(submissions));
    console.log("Highest Score:", getHighestScore(submissions));
    console.log("Lowest Score:", getLowestScore(submissions));
}

displayReport(submissions);
