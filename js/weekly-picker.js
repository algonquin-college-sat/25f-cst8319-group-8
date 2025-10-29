(function(){
  function init(){
    var table = document.getElementById('scheduleTable');
    if(!table){ return; }
    var tbody = table.querySelector('tbody');
    if(!tbody){ return; }

    var days = [
      { key: 'mon', label: 'Monday' },
      { key: 'tue', label: 'Tuesday' },
      { key: 'wed', label: 'Wednesday' },
      { key: 'thu', label: 'Thursday' },
      { key: 'fri', label: 'Friday' },
      { key: 'sat', label: 'Saturday' },
      { key: 'sun', label: 'Sunday' }
    ];
    var slots = [
      { key: 'morning', label: 'Morning' },
      { key: 'afternoon', label: 'Afternoon' },
      { key: 'evening', label: 'Evening' }
    ];

    // Build rows
    tbody.innerHTML = '';
    days.forEach(function(day){
      var tr = document.createElement('tr');

      var th = document.createElement('th');
      th.scope = 'row';
      th.className = 'picker-head-day';
      th.textContent = day.label;
      tr.appendChild(th);

      slots.forEach(function(slot){
        var td = document.createElement('td');
        td.className = 'picker-cell';
        var id = day.key + '-' + slot.key;
        td.innerHTML = '<label for="' + id + '"style="cursor:pointer; position: absolute;left:50%;height:50%;transform: translate(-50%, -50%);">' +
                         '<input type="checkbox" id="' + id + 
                                '" name="' + id +        // wed-morning
                                '" data-day="' + day.key + 
                                '" data-slot="' + slot.key + 
                                '" aria-label="' + day.label + 
                                ' - ' + slot.label + '"/>' +
                       '</label>';
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    // Clear
    var clearBtn = document.getElementById('wp-clear');
    if(clearBtn){
      clearBtn.addEventListener('click', function(){
        var boxes = table.querySelectorAll('input[type="checkbox"]');
        Array.prototype.forEach.call(boxes, function(cb){ cb.checked = false; });
      });
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();