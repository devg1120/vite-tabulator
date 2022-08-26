
import "/tabulator/src/scss/tabulator_gs.scss";
//import '/tabulator/src/scss/themes/tabulator_modern_gs.scss'

//import '/tabulator/src/scss/tabulator.scss'
//import '/tabulator/src/scss/themes/tabulator_modern.scss'
//import '/tabulator/src/scss/themes/tabulator_midnight.scss'
//import '/tabulator/src/scss/themes/materialize/tabulator_materialize.scss'
//import '/tabulator/src/scss/themes/semanticui/tabulator_semanticui.scss'
//import '/tabulator/src/scss/themes/bootstrap/tabulator_bootstrap5.scss'

import {
  Tabulator,
  FormatModule,
  EditModule,
  DataTreeModule,
} from "/tabulator/src/js/builds/esm";
import {
  ResizeColumnsModule,
  ResizeRowsModule,
  SelectRowModule,
  MoveRowsModule,
  MoveColumnsModule,
  FrozenColumnsModule,
} from "/tabulator/src/js/builds/esm";
import {
	textareaEditor,
	textareaEditorSetTable,
} from "./textareaEditor";
import {
	inputEditor,
	inputEditorSetTable,
} from "./inputEditor";

import {
	columns,
} from "./schemaColumns";

import {
	data,
} from "./data";


Tabulator.registerModule([
  FormatModule,
  EditModule,
  DataTreeModule,
  ResizeColumnsModule,
  ResizeRowsModule,
  SelectRowModule,
  MoveRowsModule,
  MoveColumnsModule,
  FrozenColumnsModule,
]);


var table = new Tabulator("#example-table", {
  height: "511px",
  //height:"100%",
  //width:"511px",
  //width:"100%",
  //rowHeight: 30,
  //rowHeight: "auto",
  //data: tableDataNested,
  data: data,
  dataTree: true,
  dataTreeStartExpanded: true,
  dataTreeSelectPropagate:true, 
  dataTreeChildIndent:9, 
  resizableRows: true,
  //selectable:true,
  //movableRows:true,
  movableColumns: true,
  columns: columns, 
  rowFormatter:function(row){
        //row - row component

        var data = row.getData();

        if(data.col == "blue"){
            row.getElement().style.backgroundColor = "#ffff00";
        }
    },
});

textareaEditorSetTable(table) ;
inputEditorSetTable(table) ;

window.addEventListener("resize", function () {
  table.redraw(true); 
});

/*
document.addEventListener('keydown', keydown_event);

function keydown_event(e) {
  console.log("document key down:" + e.key);
  if (e.ctrlKey === false) {
    if (e.shiftKey === false) {
      if (e.key == "ArrowDown" || e.key == "Enter") {
        table.navigateDown();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == "ArrowUp") {
        table.navigateUp();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == "ArrowLeft") {
        //if( e.shiftKey || e.ctrlKey ) {
        table.navigateLeft();
        e.preventDefault();
        e.stopPropagation();
        //}
      } else if (e.key == "ArrowRight") {
        //if( e.shiftKey || e.ctrlKey ) {
        table.navigateRight();
        e.preventDefault();
        e.stopPropagation();
        //}
      }
    } else {
    }
  } else {
    // e.ctrlKey == true
    if (e.key == "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.key == "ArrowUp") {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.key == "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.key == "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
    }
  }
}
*/

//table.on('keydown',keydown_event);
