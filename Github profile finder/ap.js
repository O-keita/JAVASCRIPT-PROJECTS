
async function getUsers(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const userData = await response.json();
      document.querySelector(".image").src = userData.avatar_url
      document.querySelector(".name").innerHTML = userData.name
      document.querySelector(".bio").innerHTML = userData.bio
      document.querySelector(".followers").innerHTML = userData.followers
      document.querySelector(".repo").innerHTML = userData.public_repos


      return userData;
    } catch (error) {
      console.error('Error fetching user information:', error);
      throw error;
    }
  }
  

  const serachValue = document.querySelector(".search-info input")

  const searchIcon = document.querySelector('.search')

  searchIcon.addEventListener('click', function(){
    getUsers(serachValue.value)
  })
 
    document.addEventListener('keyup', (event)=>{
        if (event.key === 'Enter'){
            searchIcon.click()
        }
    })
  getUsers()
  
 

  