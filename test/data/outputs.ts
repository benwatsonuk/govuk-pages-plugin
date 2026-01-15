export const getPagesTest = {
    output: [
    {
        id: 1,
        title: "Title 1",
        type: "email",
        description: "A description about item 1",
        route: "/a/a/1",
    },
    {
        id: 2,
        title: "Title 2",
        type: "email",
        description: "A description about item 2",
        route: "/a/b/2",
    },
    ]
} 

export const getStagesTest = {
    output: [
    {
        id: "stage1",
        title: "Stage 1",
        description: "A description about stage 1",
        route: "/a",
        subStages: [
            {
            id: 1,
            title: "Sub-stage 1-1",
            description: "A description about sub-stage 1-1",
            route: "/a/a",
            },
            {
            id: 2,
            title: "Sub-stage 1-2",
            description: "A description about sub-stage 1-2",
            route: "/a/b",
            },
        ],
        },{
        id: "stage2",
        title: "Stage 2",
        description: "A description about stage 2",
        route: "/b",
        subStages: [
            {
            id: 1,
            title: "Sub-stage 2-1",
            description: "A description about sub-stage 2-1",
            route: "/b/a",
            },
            {
            id: 2,
            title: "Sub-stage 2-2",
            description: "A description about sub-stage 2-2",
            route: "/b/b",
            },
        ],
    }
]
}

export const getStagesWithPagesTest = {
    output: [
   {
        id: "unassigned",
        title: "Unassigned",
        description: "Pages not assigned to any stage or sub-stage",
        pages: [
            {
            id: 1,
            title: "Title 1",
            type: "email",
            description: "A description about item 1",
            route: "/a/a/1",
            },
            {
            id: 2,
            title: "Title 2",
            type: "email",
            description: "A description about item 2",
            route: "/a/b/2",
            },
        ],
    }]
}