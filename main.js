//import '/node_modules/tabulator-tables/dist/css/tabulator_bulma.css'
//import '/node_modules/tabulator-tables/dist/css/tabulator.css'
//import {Tabulator, FormatModule, EditModule, DataTreeModule} from 'tabulator-tables';


//import '/tabulator/src/scss/tabulator.scss'
import '/tabulator/src/scss/themes/tabulator_modern.scss'
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

/*
    var tableData = [
        {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
        {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true},
    ]

    var dataTable = new Tabulator("#table", {
        data:tableData,
        layout:"fitColumns",
        columns:[
            {title:"Name", field:"name"},
            {title:"Age", field:"age"},
            {title:"Gender", field:"gender"},
            {title:"Height", field:"height"},
            {title:"Favourite Color", field:"col"},
            {title:"Date Of Birth", field:"dob"},
            {title:"Cheese Preference", field:"cheese"},
        ],
    })
*/

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


var table = new Tabulator("#example-table", {
    height:"311px",
    //width:"511px",
    data:tableDataNested,
    dataTree:true,
    
    dataTreeStartExpanded:true,
    resizableRows:true, 
    movableRows:true,
    columns:[
    {title:"Name", field:"name", width:200, responsive:0, frozen:true, resizable:true, editor:"input"}, //never hide this column
    {title:"Location", field:"location", width:150, resizable:true, editor:"input"},
    {title:"Gender", field:"gender", width:150, responsive:2, resizable:true, editor:"input"}, //hide this column first
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Favourite Color", field:"col", width:150, resizable:true, editor:"input"},
    {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150, resizable:true, editor:"input"},
    ],
});
