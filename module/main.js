
var counter = 1;
$(document).on("click", "button#add-row.add-row", function(){
    event.preventDefault();
    counter++;
    var newRow = $('<tr><td><input type="text" name="SkillName'+ counter +'" id="SkillName'+ counter 
            + '"/></td><td><input type="text" name="Specialization'+ counter +'" id="Specialization'+ counter 
            + '" /></td><td><input type="text" name="Stat'+counter+'" id="Stat'+ counter 
            + '" /></td><td><input type="text" name="EpicFail'+counter+'" id="EpicFail'+ counter 
            + '"/></td><td><input type="text" name="Difficulty'+counter+'" id="Difficulty'+ counter 
            + '" /></td><td><input type="text" name="Attempts'+counter+'" id="Attempts'+ counter 
            + '" /></td><td><input type="text" name="SuccessPoints'+counter+'" id="SuccessPoints'+ counter 
            + '" /></td><td><input type="text" name="Mastery'+counter+'" id="Mastery' + counter 
            + '" /></td><td><input type="text" name="Completion' + counter + '" id="Completion' + counter 
            + '" /></td><td><input type="text" name="MasterEpic' + counter + '" id="MasterEpic' + counter +'" /></td></tr>');   
    $('table.mprogress').append(newRow);
    console.log("aaaaa");
});
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  // Show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}