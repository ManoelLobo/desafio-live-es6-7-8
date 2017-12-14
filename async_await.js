// Async/await

const listRepos = async () => {
  const user = await api.get('/users/diego3g');
  const repos = await api.get(`/repos/${user.id}`);
  
  repos.forEach((item, index) => {
    console.log(`Posição: ${index}: ${item}`);
  });
}
