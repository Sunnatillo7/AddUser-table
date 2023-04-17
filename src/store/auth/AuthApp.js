export default {
  // namespade:true, 
  state: {
    users :[
      {
        name:"Sunnatillo",
        lastname:"Askaraliyev",
        age:19,
        email:"sunnat@gmail.com",
        address:"Shayxontohur",
      },
    ]
  },
  getters: {
   returnUsers(state){
     return state.users
    // console.log(item);
   },
   addUser(state){
    return (

      state.users
      // state.users.push({
      //   name:"Anvar",
      //   lastname:"Saoliyev",
      //   age:22,
      //   email: "skihdiegy@gmail.com",
      //   address :"adefnj"
      // })
    )
   }
  },
  mutations: {


  },
  actions: {
 
  },
};
