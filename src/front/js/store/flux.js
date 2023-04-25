const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			products: [],
			cart:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("App just loaded, synching the session storage token");
				if(token && token != "" && token != undefined) setStore({token : token});
			},

			logout: () => {
				const token = sessionStorage.removeItem("token");
				console.log("Logging out");
				setStore({ token: null });

			},

			login: async (email, password) => {

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				}
				try{
					const resp = await fetch('https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/token', opts)
					if(resp.status !== 200){
						alert ("There has been some error");
						return false;
					} 
					const data = await resp.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token});
					return true;
				}
				catch(error){
					console.error("There was an error login in!")
					}
			},

			gglogin: async (email) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
					})
				}
				try{
					const resp = await fetch('https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/ggltoken', opts)
					if(resp.status !== 200){
						alert ("There has been some error");
						return false;
					} 
					const data = await resp.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token});
					return true;
				}
				catch(error){
					console.error("There was an error login in!")
					}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setProducts: (data) => {
				const store = getStore()
				fetch("https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/products")
        			.then(res => res.json())
        			.then(data => {
          				setStore( { products : data } );
        			});
					console.log(store.products)
			},
			setCart: (data) =>{
				const store = getStore()
				setStore ( { cart : [...store.cart, data ] } )
			},
			setAllCart: (data) =>{
				const store = getStore()
				setStore ( { cart : data })
			},
			deleteFromCart: (data) =>{
				const store = getStore();
				setStore ( { cart : store.cart.filter(product => product.name !== data.name) } )
			}
		}
	};
};

export default getState;
