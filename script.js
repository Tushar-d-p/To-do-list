$(document).ready(function(){

	let addButton = $(".add-button");

	let Field = $(".add-field");

	let tasks = $(".tasks");

	// Add task

	addButton.on("click", function(){

		if(Field.val() == ""){
			return;
		}

		let elem = `<li class="task">
					<div class="task-checked col-1">
						<input type="checkbox">
					</div>
					<div class="task-text col-2">${Field.val()}</div>
					<div class="task-remove col-3"></div>
				</li>`

		tasks.append(elem);
		Field.val(''); //clear field value when page is refresh

	})

	// Remove task

	// let removeBtns = $(".task-remove");

	// removeBtns.on("click",function(){
	// 	$(this).parent().remove();
	// })

	/* but this will not work because event handler gets added to only that 
	elements that were present when page was loaded it does not gets added
	to new task that are being added*/ 

	// ---------------------------------//

	tasks.on("click",".task-remove", function(){
		$(this).parent().remove();
	})

	// we added event handler for entire ul

	/*when we click on any of the tasks within the ul we look for task remove
	specific one that was clicked and then to that specific event we add event handler*/

	// ----------------------------------------//
	tasks.on("change",".task-checked input",function(){
		$(this).parent().next().toggleClass("checked");
	})

	// ---------------------------------------//
	//Sort functionality

	// for this we first add jquery ui link in html then add id to ul tag
	// then use that id to call sortable function

	$("#task-list-sort").sortable();
})