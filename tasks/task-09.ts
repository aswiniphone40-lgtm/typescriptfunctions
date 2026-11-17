/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

function countTotalPatients(patients: Patient[]) {
    return patients.length;
}

function countAdmittedPatients(patients: Patient[]) {
    return patients.filter(p => p.admitted === true).length;
}

function countDischargedPatients(patients: Patient[]) {
    return patients.filter(p => p.admitted === false).length;
}

function countPatientsByDepartment(patients: Patient[], department: string) {
    return patients.filter(p => p.department === department).length;
}

function getHighestBill(patients: Patient[]) {
    return patients.length === 0 ? 0 : Math.max(...patients.map(p => p.bill));
}

function getLowestBill(patients: Patient[]) {
    return patients.length === 0 ? 0 : Math.min(...patients.map(p => p.bill));
}

function calculateAverageBill(patients: Patient[]) {
    if (patients.length === 0) return 0;

    const total = patients.reduce((sum, p) => sum + p.bill, 0);
    return total / patients.length;
}

function calculateTotalRevenue(patients: Patient[]) {
    return patients.reduce((sum, p) => sum + p.bill, 0);
}

function getAdmittedPatientNames(patients: Patient[]) {
    return patients.filter(p => p.admitted === true).map(p => p.name);
}

function printHospitalReport(patients: Patient[]) {
    console.log("===== HOSPITAL DAILY REPORT =====");
    console.log("Total Patients:", countTotalPatients(patients));
    console.log("Admitted Patients:", countAdmittedPatients(patients));
    console.log("Discharged Patients:", countDischargedPatients(patients));

    console.log("Pediatrics:", countPatientsByDepartment(patients, "Pediatrics"));
    console.log("Cardiology:", countPatientsByDepartment(patients, "Cardiology"));
    console.log("Orthopedics:", countPatientsByDepartment(patients, "Orthopedics"));

    console.log("Highest Bill:", getHighestBill(patients));
    console.log("Lowest Bill:", getLowestBill(patients));
    console.log("Average Bill:", calculateAverageBill(patients));
    console.log("Total Revenue:", calculateTotalRevenue(patients));
    console.log("Admitted Patient Names:", getAdmittedPatientNames(patients));
}

printHospitalReport(patients);
