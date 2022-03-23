let rawData = [
    {
        title : {fr:"foobar",ar:''},
        type : 0, // 0 = QCM
        data : {
            text1 : "value1",
            text2 : "value2"
        },
        callback : foo
    },
    {
        title : "bardar",
        type : 1, // 1 = Number input
        data : {
            text : "mytext",
            min : 5,
            max : 10
        },
        callback : bar
    }
];