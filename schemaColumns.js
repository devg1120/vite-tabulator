
import {
        textareaEditor,
} from "./textareaEditor";
import {
        inputEditor,
} from "./inputEditor";

export var  columns = [
    {
      title: "Name",
      field: "name",
      width: 200,
      responsive: 0,
      frozen: true,
      resizable: true,
      //editor: "input",
      editor: inputEditor,
    }, 
    {title:"Example", field:"example", formatter:"rownum"},
    {title:"Example", field:"example", formatter:"buttonCross"},
    {title:"Example", field:"example", formatter:"handle"},
    {
      title: "Location",
      field: "location",
      width: 100,
      resizable: true,
      //editor: inputEditor,
      editor: textareaEditor,
      //editor: "textarea",
      formatter:"textarea",
    },
    {
      title: "Gender",
      field: "gender",
      width: 150,
      responsive: 2,
      resizable: true,
      editor: inputEditor,
    }, //hide this column first
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
      formatter:"html",
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Favourite Color",
      field: "col",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
    {
      title: "Date Of Birth",
      field: "dob",
      hozAlign: "center",
      sorter: "date",
      width: 150,
      resizable: true,
      editor: inputEditor,
    },
  ];

