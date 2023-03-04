export default {
    name : "user",
    title: "User",
    type : "document",
    fields: [
        {
            name: "fname",
            title: "Full name",
            type: "string",
        },
        {
            name: "profile",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "email",
            title: "Email address",
            type: "string",
        },
        {
            name: "pNo",
            title: "Phone number",
            type: "string",
            validation: Rule=>Rule.max(10).warning(`A number must be greater than 10 digits`)
        },
        {
            name: "profession",
            title: "Profession",
            type: "string",
        },
        {
            name: "userWhatsapp",
            title: "Whatsapp link",
            type: "string",
            
        },
        {
            name: "userTwitter",
            title: "Twitter link",
            type: "string",
         
        },
        {
            name: "userInstagram",
            title: "Instagram link",
            type: "string",
            
        }

    ]
}