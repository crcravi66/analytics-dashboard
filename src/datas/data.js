
export const cartTitles = [
    {
        id: 1,
        title: "Company Performance",
        data: [
            ["Year", "Sales", "Expenses"],
            ["2004", 1000, 400],
            ["2005", 1170, 460],
            ["2006", 660, 1120],
            ["2007", 1030, 540],
        ],
        options: {
            title: "Company Performance",
            curveType: "function",
            legend: { position: "bottom" },
        },
        chartType: "LineChart"
    },
    {
        id: 2,
        title: "Product Sales",
        data: [
            ["Task", "Hours per Day"],
            ["product A", 11],
            ["product B", 2],
            ["product C", 2],
            ["product D", 2],
        ],
        options: {
            title: "Product Sales",
        },
        chartType: "PieChart"
    },
    {
        id: 3,
        title: "Monthly Revenue",
        data: [
            ["Month", "Revenue", { role: "style" }],
            ["Jan", 1000, "#b87333"], // RGB value
            ["Feb", 1170, "silver"], // English color name
            ["Mar", 660, "gold"],
            ["Apr", 1030, "color: #e5e4e2"], // CSS-style declaration
        ],
        options: {
            title: "Monthly Revenue",
        },
        chartType: "ColumnChart"
    },
    {
        id: 4,
        title: "R&D Investment vs New Product Launches",
        data: [
            ["R&D Investment ($ Billions)", "New Product Launches"],
            [5.2, 10],
            [6.1, 12],
            [6.8, 15],
            [7.5, 18],
            [8.2, 22],
            [9.1, 25],
            [10.0, 30],
            [11.3, 35],
            [12.2, 40],
            [13.5, 48]
        ],
        options: {
            title: "J&J Innovation Trend",
            hAxis: { title: "R&D Investment ($ Billions)", minValue: 0, maxValue: 15 },
            vAxis: { title: "New Product Launches", minValue: 0, maxValue: 15 },
            legend: "none",
        },
        chartType: "ScatterChart"
    },
    {
        id: 5,
        title: "Chart View Time Distribution",
        data: [
            ["Task", "Hours per Day"],
            ["Chart 1", 2782],
            ["Chart 2", 492],
            ["Chart 3", 1454],
            ["Chart 4", 116],
            ["Chert 5", 1468], // CSS-style declaration
        ],
        options: {
            title: "Distribution of View Time Across Charts",
            pieHole: 0.4,
            is3D: false,
            legend: { position: 'bottom' },
        },
        chartType: "PieChart"
    }
]