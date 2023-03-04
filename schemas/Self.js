export default {
    name: "self",
    title: "Self",
    type: "document",
    fields: [
        {
            name: "userName",
            title: "User Name",
            type: "reference",
            to: [{type: "user"}],
        },
        { 
            name:"slug",
            title:"Slug",
            type: "slug",
            options: {
                source: "links",
                maxLength: 96,
            },
        },
        {
            name: "officeName",
            title: "Office Name",
            type: "reference",
            to: [{type: "office"}],
        },
       
    ]

}