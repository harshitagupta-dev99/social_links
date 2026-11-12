#Decisions

1. sans-serif or serif - fallback fonts added incase browser is unable to load google fonts 
2. append child giving error even when code was right only - problem was browser read code sequetianlly so if js file is in head , it executed js code when it had not even reached the body so it could not find the targetted element , fix - either use script tag at end of body , or use defer ( means u can fetch the file but dont run it until the html is built )

i took time to fix css - basic basic chalega - dont spend all the time here - focus on getting the functionality to get working 

- chekc how to make this solution more accessible + test it 

