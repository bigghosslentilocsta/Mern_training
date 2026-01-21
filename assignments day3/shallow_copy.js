const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
//create a shallow copy of user 
user2 = {...user };

//change name in copied object
user2.name="LENTI";
//change preference theme in copied data
user2.preferences.theme="LIGHT";
//.log both original and copied user data

console.log(user);
console.log(user2);