//document.querySelector(".app").innerHTML = "Clyde";

class App{
	constructor(){
		this.data = [];
		this.user = [];
	}
	render(html,component){	

		component.innerHTML += html;
	}
	reRender(html,component){	

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){
		super();
		this.fetchData();		
		this.displayData();
	}
	displayData(){
		let html = `<ul>`;
		for(let i=0;i<this.data.length;i++){
			html += `<li>
						${this.data[i].id}: ${this.data[i].name}
					 </li>`;
		}
		html+=`</ul>`;
		this.render(html,document.querySelector(".app"));
	}
	fetchData(){
		window.localStorage.setItem("data", "this is data");
		window.localStorage.setItem("user", "this is user");
		// this.data = JSON.parse(window.localStorage.getItem("data"));
		// let sampleData = [
			// {
			// 	"id":"1",
			// 	"name":"Clyde"
			// },
			// {
			// 	"id":"2",
			// 	"name":"RJ"
			// }];
		// this.data = sampleData;
		// window.localStorage.clear();
		// let person1 = {
		// 	"id":"1",
		// 	"name":"Clyde"
		// };
		// let person2 = {
		// 	"id":"2",
		// 	"name":"RJ"
		// };
		// let sampleData = [];
		// sampleData.push(person1);
		// sampleData.push(person2);
		// window.localStorage.setItem("data", JSON.stringify(sampleData));		
		// this.data = window.localStorage.getItem("data");		
		// // this.data = JSON.parse(window.localStorage.getItem("data"));		
		// this.data = JSON.parse(this.data);
		// console.log(this.data);		
		// window.localStorage.setItem("data", JSON.stringify(person));
		// let keyname = window.localStorage.key(i);
		// var value = window.localStorage.getItem("key");
		// window.localStorage.removeItem("key");
  //       window.localStorage.setItem("key2", "value2");
  //       window.localStorage.clear();		
	}

}

let comp = new Component();