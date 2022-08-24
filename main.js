//import '/node_modules/tabulator-tables/dist/css/tabulator_bulma.css'
//import '/node_modules/tabulator-tables/dist/css/tabulator.css'
//import {Tabulator, FormatModule, EditModule, DataTreeModule} from 'tabulator-tables';

import '/tabulator/src/scss/tabulator_gs.scss'
//import '/tabulator/src/scss/themes/tabulator_modern_gs.scss'

//import '/tabulator/src/scss/tabulator.scss'
//import '/tabulator/src/scss/themes/tabulator_modern.scss'
//import '/tabulator/src/scss/themes/tabulator_midnight.scss'
//import '/tabulator/src/scss/themes/materialize/tabulator_materialize.scss'
//import '/tabulator/src/scss/themes/semanticui/tabulator_semanticui.scss'
//import '/tabulator/src/scss/themes/bootstrap/tabulator_bootstrap5.scss'

import {Tabulator, FormatModule, EditModule, DataTreeModule } from '/tabulator/src/js/builds/esm';
import {ResizeColumnsModule, ResizeRowsModule, MoveRowsModule, FrozenColumnsModule} from '/tabulator/src/js/builds/esm';

Tabulator.registerModule([FormatModule, 
	EditModule, 
	DataTreeModule, 
	ResizeColumnsModule, 
	ResizeRowsModule, 
	MoveRowsModule, 
	FrozenColumnsModule]);


var tableDataNested = [
    {name:"Oli Bob", location:"United Kingdom", gender:"male", col:"red", dob:"14/04/1984", _children:[
        {name:"Mary May", location:"Germany", gender:"female", col:"blue", dob:"14/05/1982"},
        {name:"Christine Lobowski", location:"France", gender:"female", col:"green", dob:"22/05/1982"},
        {name:"Brendon Philips", location:"USA", gender:"male", col:"orange", dob:"01/08/1980", _children:[
            {name:"Margret Marmajuke", location:"Canada", gender:"female", col:"yellow", dob:"31/01/1999"},
            {name:"Frank Harbours", location:"Russia", gender:"male", col:"red", dob:"12/05/1966"},
        ]},
    ]},
    {name:"Jamie Newhart", location:"India", gender:"male", col:"green", dob:"14/05/1985"},
    {name:"Gemma Jane", location:"China", gender:"female", col:"red", dob:"22/05/1982", _children:[
        {name:"Emily Sykes", location:"South Korea", gender:"female", col:"maroon", dob:"11/11/1970"},
    ]},
    {name:"James Newman", location:"Japan", gender:"male", col:"red", dob:"22/03/1998"},
];

var dataEditor = function(cell, onRendered, success, cancel, editorParams){
    //cell - the cell component for the editable cell
    //onRendered - function to call when the editor has been rendered
    //success - function to call to pass thesuccessfully updated value to Tabulator
    //cancel - function to call to abort the edit and return to a normal cell
    //editorParams - params object passed into the editorParams column definition property

    var editor = document.createElement("input");

    editor.setAttribute("type", "text");

    editor.style.padding = "1px";
    editor.style.width = "100%";
    editor.style.boxSizing = "border-box";

    editor.value = cell.getValue();

    onRendered(function(){
        editor.focus();
        editor.style.css = "100%";
    });

    function successFunc(){
        success(editor.value);
    }

    function inputFunc(e){
       console.log(e.target.value);
    }


    function keypress_event(e) {
           console.log("key press:" + e.key);
    }
    
    function keydown_event(e) {
           console.log("key down:" + e.key);
	    /*
           if( e.shiftKey  === false 
           &&  e.ctrlKey  === false ){
               if (e.key == 'ArrowDown' || e.key == 'Enter') {
                 table.navigateDown();
               } else if (e.key == 'ArrowUp') {
                 table.navigateUp();
               } else if (e.key == 'ArrowLeft') {
                 //table.navigateLeft();
               } else if (e.key == 'ArrowRight') {
                 //table.navigateRight();
               }
               e.stopPropagation();

           }else{
           }
	   */

               if (e.key == 'ArrowDown' || e.key == 'Enter') {
                 table.navigateDown();
               } else if (e.key == 'ArrowUp') {
                 table.navigateUp();
               } else if (e.key == 'ArrowLeft') {
                    if( e.shiftKey || e.ctrlKey ) {
                       table.navigateLeft();
                       e.stopPropagation();
		    }
               } else if (e.key == 'ArrowRight') {
                    if( e.shiftKey || e.ctrlKey ) {
                       table.navigateRight();
                       e.stopPropagation();
		    }
               }


    }
    function keyup_event(e) {
           console.log(e.key);
    }

    editor.addEventListener("change", successFunc);
    editor.addEventListener("blur", successFunc);
    editor.addEventListener("input", inputFunc);
    //editor.addEventListener("beforeinput", inputFunc);
    //editor.addEventListener('keypress', keypress_event);
    //editor.addEventListener('keydown', keydown_event);
    //editor.addEventListener('keyup', keyup_event);


    //return the editor element
    return editor;
};


var table = new Tabulator("#example-table", {
    height:"311px",
    //width:"511px",
    data:tableDataNested,
    dataTree:true,
    dataTreeStartExpanded:true,
    resizableRows:true, 
    movableRows:true,
    columns:[
/*
   {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:60, minWidth:60},
*/
/*
    {title:"Name", field:"name", width:200, responsive:0, frozen:true, resizable:true, editor:"input"}, //never hide this column
    {title:"Location", field:"location", width:150, resizable:true, editor:"input"},
    {title:"Gender", field:"gender", width:150, responsive:2, resizable:true, editor:"input"}, //hide this column first
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dateEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"   },
    {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150, resizable:true, editor:"input"},
	    */
    {title:"Name", field:"name", width:200, responsive:0, frozen:true, resizable:true, editor:'input'}, //never hide this column
    {title:"Location", field:"location", width:150, resizable:true, editor:dataEditor},
    {title:"Gender", field:"gender", width:150, responsive:2, resizable:true, editor:dataEditor}, //hide this column first
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:dataEditor   },
    {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150, resizable:true, editor:dataEditor},
    ],
});


document.addEventListener('keydown', keydown_event);
//var tableEl = document.getElementById("#example-table");
//tableEl.addEventListener('keydown', keydown_event);

function keydown_event(e) {
   console.log("document key down:" + e.key);
               if (e.key == 'ArrowDown' || e.key == 'Enter') {
                 table.navigateDown();
               } else if (e.key == 'ArrowUp') {
                 table.navigateUp();
               } else if (e.key == 'ArrowLeft') {
                    if( e.shiftKey || e.ctrlKey ) {
                       table.navigateLeft();
                       e.stopPropagation();
		    }
               } else if (e.key == 'ArrowRight') {
                    if( e.shiftKey || e.ctrlKey ) {
                       table.navigateRight();
                       e.stopPropagation();
		    }
               }
	/*
    if( e.ctrlKey  === false ){
	if (e.key == 'ArrowDown' || e.key == 'Enter') {
	  table.navigateDown();
	} else if (e.key == 'ArrowUp') {
	  table.navigateUp();
	} else if (e.key == 'ArrowLeft') {
	  table.navigateLeft();
	} else if (e.key == 'ArrowRight') {
	  table.navigateRight();
	}
   }else{
   }
   */
}


//table.on('keydown',keydown_event);

