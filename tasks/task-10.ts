/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */



const enrollments = [
    { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
    { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
    { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
    { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
    { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
    { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
    { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
    { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

function countTotalEnrollments(enrollments: Enrollment[]) {
    return enrollments.length;
}

function countCompleted(enrollments: Enrollment[]) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed === true) {
            total++;
        }
    }

    return total;
}

function countIncomplete(enrollments: Enrollment[]) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed === false) {
            total++;
        }
    }

    return total;
}

function calculateCompletionPercentage(enrollments: Enrollment[]) {
    return (countCompleted(enrollments) / enrollments.length) * 100;
}

function getHighestScore(enrollments: Enrollment[]) {
    let highest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score > highest) {
            highest = enrollments[i].score;
        }
    }

    return highest;
}

function getLowestScore(enrollments: Enrollment[]) {
    let lowest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score < lowest) {
            lowest = enrollments[i].score;
        }
    }

    return lowest;
}

function calculateAverageScore(enrollments: Enrollment[]) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total += enrollments[i].score;
    }

    return total / enrollments.length;
}

function countPassingStudents(enrollments: Enrollment[]) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score >= 75) {
            total++;
        }
    }

    return total;
}

function countStudentsByCourse(enrollments: Enrollment[], course: string) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            total++;
        }
    }

    return total;
}

function calculateAverageScoreByCourse(enrollments: Enrollment[], course: string) {
    let total = 0;
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            total += enrollments[i].score;
            count++;
        }
    }

    if (count === 0) return 0;

    return total / count;
}

function calculateTotalLearningHours(enrollments: Enrollment[]) {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total += enrollments[i].duration;
    }

    return total;
}

function calculateAverageLearningDuration(enrollments: Enrollment[]) {
    return calculateTotalLearningHours(enrollments) / enrollments.length;
}

function printCourseStatistics(enrollments: Enrollment[]): void {
    console.log("===== COURSE STATISTICS =====");

    console.log("TypeScript Students:", countStudentsByCourse(enrollments, "TypeScript"));
    console.log("TypeScript Average:", calculateAverageScoreByCourse(enrollments, "TypeScript"));

    console.log("Database Students:", countStudentsByCourse(enrollments, "Database"));
    console.log("Database Average:", calculateAverageScoreByCourse(enrollments, "Database"));

    console.log("Backend Students:", countStudentsByCourse(enrollments, "Backend"));
    console.log("Backend Average:", calculateAverageScoreByCourse(enrollments, "Backend"));
}

function printDashboard(enrollments: Enrollment[]): void {
    console.log("===== COMPLETION STATISTICS =====");
    console.log("Total Enrollments:", countTotalEnrollments(enrollments));
    console.log("Completed:", countCompleted(enrollments));
    console.log("Incomplete:", countIncomplete(enrollments));
    console.log("Completion Percentage:", calculateCompletionPercentage(enrollments) + "%");

    console.log("===== ACADEMIC STATISTICS =====");
    console.log("Highest Score:", getHighestScore(enrollments));
    console.log("Lowest Score:", getLowestScore(enrollments));
    console.log("Average Score:", calculateAverageScore(enrollments));
    console.log("Passing Students:", countPassingStudents(enrollments));

    printCourseStatistics(enrollments);

    console.log("===== LEARNING STATISTICS =====");
    console.log("Total Learning Hours:", calculateTotalLearningHours(enrollments));
    console.log("Average Learning Duration:", calculateAverageLearningDuration(enrollments));
}

printDashboard(enrollments);
