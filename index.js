$(document).ready(function() {
   
    $("#logoutButton").click(function() {
        window.location.href = "index.html"; 
    });
});
$(document).ready(function() {
    
    $("#showAddIncome").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#add_income").fadeIn(); 
    });

    $("#showAddExpense").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#add_expense").fadeIn();
    });

    $("#showViewBalance").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#view_balance").fadeIn();
    });

    $("#showSettings").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#settings").fadeIn();
    });
    $("#showEditDetails").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#editPersonalDetails").fadeIn(); 
    });

    $("#income_button").click(function () {
        $("section").hide(); 
        $("#add_income").fadeIn(); 
    });

    $("#expense_button").click(function () {
        $("section").hide();
        $("#add_expense").fadeIn(); 
    });
    $("#cancelIncome").click(function () {
        $("section").hide();
        $("#startPage").fadeIn(); 
    });
    $("#cancelExpense").click(function () {
        $("section").hide();
        $("#startPage").fadeIn(); 
    });
    $("#cancelEditIncome").click(function () {
        $("section").hide();
        $("#startPage").fadeIn(); 
    });
    $("#showEditIncome").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#editIncome").fadeIn(); 
    });
    $("#cancelEditExpense").click(function () {
        $("section").hide();
        $("#startPage").fadeIn(); 
    });
    $("#showEditExpense").click(function() {
        $("section").hide();
        $("#startPage").hide();
        $("#editExpense").fadeIn(); 
    });
   $("#cancelEditData").click(function () {
        $("section").hide();
        $("#startPage").fadeIn(); 
    });
});

function updateBalance(period) {
        let incomeData = [
            { category: "Salary", amount: 5000 },
            { category: "Online Sales", amount: 1200 },
            { category: "Investments", amount: 300 }
        ];

        let expenseData = [
            { category: "Food", amount: 800 },
            { category: "Transport", amount: 200 },
            { category: "Entertainment", amount: 400 },
            { category: "Rent", amount: 1500 }
        ];

        let incomeHTML = "";
        let totalIncome = 0;
        incomeData.forEach(item => {
            incomeHTML += `<tr><td>${item.category}</td><td>${item.amount} PLN</td></tr>`;
            totalIncome += item.amount;
        });

        let expenseHTML = "";
        let totalExpense = 0;
        expenseData.sort((a, b) => b.amount - a.amount);
        expenseData.forEach(item => {
            expenseHTML += `<tr><td>${item.category}</td><td>${item.amount} PLN</td></tr>`;
            totalExpense += item.amount;
        });

        $("#incomeTable tbody").html(incomeHTML);
        $("#expenseTable tbody").html(expenseHTML);

        let balance = totalIncome - totalExpense;
        let balanceMessage = balance >= 0
            ? `<span class="text-success">Congratulation!You manage your finances very well.</span>`
            : `<span class="text-danger">Be careful, you're getting into debt</span>`;

        $("#balanceResult").html(`<h4>Bilans: ${balance} PLN</h4>${balanceMessage}`);
    }


$(document).ready(function () {
    $("#changeData").click(function () {
        alert("Opcja: Zmień dane");
        // Dodaj tutaj kod do zmiany danych
    });

    $("#deleteExpense").click(function () {
        alert("Opcja: Are you sure you want to delete the expense?");
        
    });

    $("#deleteIncome").click(function () {
        alert("Opcja: Are you sure you want to delete the income?");
        
    });

    $("#changePaymentType").click(function () {
        alert("Opcja: ");
       
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("budgetChart").getContext("2d");

    new Chart(ctx, {
        type: "bar", 
        data: {
            labels: ["Incomes", "Expenses"],
            datasets: [{
                label: "Budget Distribution",
                data: [70, 30], // 70% income, 30% expenses
                backgroundColor: ["	#0d6efd", "#dee2e6"],
                borderColor: ["#000000"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Ponieważ to procenty, max = 100
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    var incomeCtx = document.getElementById("incomeChart").getContext("2d");
    var expenseCtx = document.getElementById("expenseChart").getContext("2d");

    var incomeChart = new Chart(incomeCtx, {
        type: "bar",
        data: {
            labels: ["Salary", "Online sales", "Bank interest","Others" ],
            datasets: [{
                label: "Income (PLN)",
                data: [5000, 1200, 800, 200], // Dane dla kategorii
                backgroundColor: ["#0d6efd", "#5a9cf8", "#d0e2ff", "#343a40"],
                borderColor: [["#000000"]],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 500
                    }
                }
            }
        }
    });
    var expenseChart = new Chart(expenseCtx, {
        type: "bar",
        data: {
            labels: ["Food", "Accomodation", "Transport","Telecomunication","Health","Clothes","Hygiene","Kids","Enterteinment", "Courses", "Books", "Savings","Trips", "Others"],
            datasets: [{
                label: "Expenses (PLN)",
                data: [1200, 500, 700,200, 300,55, 80, 600, 200, 500, 1000,90, 50, 100], // Dane dla kategorii
                backgroundColor: ["#0d6efd", "#5a9cf8", "#d0e2ff", "#343a40", "#6c757d", "#dee2e6", "#212529", "#b0d4ff", "#198754", "#a3d9a5", "#fd7e14", "#dc3545", "#f8f9fa", "#e9ecef"]
                ,
                borderColor: ["#000000"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 200
                    }
                }
            }
        }
    });
});

$(document).ready(function() {
   
    $("#registerButton").click(function() {
       alert("Your account has been succesfully created!"); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    $("#showViewBalance").click(function() {
        $("section").hide();
        $("#view_balance").fadeIn();
        updateCharts("currentMonth");
    });

    $(".balance-period").click(function () {
        let period = $(this).data("period");
        
        if (period === "custom") {
            $("#customDateRange").fadeIn();
        } else {
            $("#customDateRange").hide();
            updateCharts(period);
        }
    });

    $("#applyCustomDate").click(function () {
        let startDate = $("#startDate").val();
        let endDate = $("#endDate").val();

        if (startDate && endDate) {
            updateCharts("custom", startDate, endDate);
        } else {
            alert("Please select both start and end dates.");
        }
    });

    function updateCharts(period, startDate = null, endDate = null) {
        console.log(`Updating charts for: ${period}, Start: ${startDate}, End: ${endDate}`);

        let incomeData = [
            { category: "Salary", amount: 5000 },
            { category: "Online Sales", amount: 1200 },
            { category: "Bank Interest", amount: 800 },
            { category: "Others", amount: 200 }
        ];

        let expenseData = [
            { category: "Food", amount: 1200 },
            { category: "Accommodation", amount: 500 },
            { category: "Transport", amount: 700 },
            { category: "Telecommunication", amount: 200 },
            { category: "Health", amount: 300 },
            { category: "Clothes", amount: 55 },
            { category: "Hygiene", amount: 80 },
            { category: "Kids", amount: 600 },
            { category: "Entertainment", amount: 200 },
            { category: "Courses", amount: 500 },
            { category: "Books", amount: 1000 },
            { category: "Savings", amount: 90 },
            { category: "Trips", amount: 50 },
            { category: "Others", amount: 100 }
        ];

        let totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0);
        let totalExpense = expenseData.reduce((sum, item) => sum + item.amount, 0);
        let remainingBalance = totalIncome - totalExpense;

        let balancePieChart = new Chart(document.getElementById("balancePieChart").getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Remaining", "Spent"],
                datasets: [{
                    data: [remainingBalance, totalExpense],
                    backgroundColor: ["#198754", "#dc3545"]
                }]
            }
        });

        let incomePercentages = incomeData.map(item => ((item.amount / totalIncome) * 100).toFixed(1));
        let incomeBarChart = new Chart(document.getElementById("incomeBarChart").getContext("2d"), {
            type: "bar",
            data: {
                labels: incomeData.map(item => item.category),
                datasets: [{
                    label: "Income (%)",
                    data: incomePercentages,
                    backgroundColor: "#0d6efd"
                }]
            },
            options: { scales: { y: { beginAtZero: true, max: 100 } } }
        });

        let expensePercentages = expenseData.map(item => ((item.amount / totalExpense) * 100).toFixed(1));
        
        let expenseBarChart = new Chart(document.getElementById("expenseBarChart").getContext("2d"), {
            type: "bar",
            data: {
                labels: expenseData.map(item => item.category),
                datasets: [{
                    label: "Expenses (%)",
                    data: expensePercentages,
                    backgroundColor: "#dc3545"
                }]
            },
            options: { scales: { y: { beginAtZero: true, max: 100 } } }
        });
    }
});


