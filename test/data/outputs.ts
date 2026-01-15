export const getPagesTest = {
    output: [
    {
        id: 1,
        title: "Title 1",
        type: "email",
        description: "A description about item 1",
        route: "/a/a/1",    
        stage: {
            main: "stage1",
            subStage: 1,
        }
    },
    {
        id: 2,
        title: 'Title 2',
        type: 'email',
        description: 'A description about item 2',
        route: '/b/b/2',
        stage: {
            main: "stage2",
            subStage: 2,
        }
    },
    {
        id: 3,
        title: 'Title 3',
        type: 'email',
        description: 'A description about item 3',
        route: '/a/b/3'
    }
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

export const getStagesWithPagesTestA = {
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

export const getStagesWithPagesTestB = {
    output: [
    {
        id: "stage1",
        title: "Stage 1",
        description: "A description about stage 1",
        subStages: [
            {
            id: 1,
            title: "Sub-stage 1-1",
            description: "A description about sub-stage 1-1",
            pages: [
                {
                id: 1,
                title: "Title 1",
                type: "email",
                description: "A description about item 1",
                route: "/a/a/1",
                stage: {
                    main: "stage1",
                    subStage: 1,
                }
                },
            ],
            }
        ],
        pages: [
            {
            id: 1,
            title: "Title 1",
            type: "email",
            description: "A description about item 1",
            route: "/a/a/1",
            stage: {
                main: "stage1",
                subStage: 1,
            }
            },
        ],
    },
    {
        id: "stage2",
        title: "Stage 2",
        description: "A description about stage 2",
        subStages: [
            {
            id: 2,
            title: "Sub-stage 2-2",
            description: "A description about sub-stage 2-2",
            pages: [
                {
                id: 2,
                title: "Title 2",
                type: "email",
                description: "A description about item 2",
                route: "/b/b/2",
                stage: {
                    main: "stage2",
                    subStage: 2,
                }
                },
            ],
            },
            ],
            pages: [
                {
                id: 2,
                title: "Title 2",
                type: "email",
                description: "A description about item 2",
                route: "/b/b/2",
                stage: {
                    main: "stage2",
                    subStage: 2,
                }
                },
            ],
        },
        {
            id: "unassigned",
            title: "Unassigned",
            description: "Pages not assigned to any stage or sub-stage",
            pages: [
                {
                id: 3,
                title: "Title 3",
                type: "email",
                description: "A description about item 3",
                route: "/a/b/3",
                },
            ],
        }
    ]
}