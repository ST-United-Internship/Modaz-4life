// $(document).ready(function () {
// 	$(".tab-a").click(function () {
// 		$(".tab").removeClass("tab-active");
// 		$(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active");
// 		$(".tab-a").removeClass("active-a");
// 		$(this).parent().find(".tab-a").addClass("active-a");
// 	});

let previous = 0;
let arrChild = document.querySelectorAll(".tab-menu > .tab-a");
let arrPages = document.querySelectorAll(".content-tab > :nth-child(n)");
console.log("arrChild:", arrChild);
arrChild.forEach((child, index) => {
	child.addEventListener("click", () => {
		if (previous !== undefined) {
			arrChild[previous].classList.remove("active-a");
			arrPages[previous].classList.remove("tab-active");
		}
		child.classList.add("active-a");
		arrPages[index].classList.add("tab-active");
		previous = index;
	});
});
// });
