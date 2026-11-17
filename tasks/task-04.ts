/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(data: { name: string; present: boolean }[]): void {
    let present = 0;
    let absent = 0;
    const absentNames: string[] = [];

    for (const s of data) {
        if (s.present) {
            present++;
        } else {
            absent++;
            absentNames.push(s.name);
        }
    }

    console.log("Total Hadir:", present);
    console.log("Total Absen:", absent);
    console.log("Siswa Absen:", absentNames.join(", "));
}

printAttendanceReport(attendances); 
