
var table = null;

export function textareaEditorSetTable(_table) {
   table = _table
}

export function textareaEditor( cell, onRendered, success, cancel, editorParams) {
  //var editor = document.createElement("input");
  var editor = document.createElement("textarea");

  editor.setAttribute("type", "text");

  editor.style.padding = "0px";
  editor.style.border = "none";
  editor.style.outline = "none";
  editor.style.width = "100%";
  editor.style.height = "100%";
  editor.style.boxSizing = "border-box";
  editor.style.resize = "none";

  editor.value = cell.getValue();

  onRendered(function () {
    editor.focus();
    editor.style.css = "100%";
  });

  function insert(startTag, endTag) {
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const oldText = editor.value;
  
    const prefix = oldText.substring(0, selectionStart);
    const inserted = startTag +
      oldText.substring(selectionStart, selectionEnd) + endTag;
    const suffix = oldText.substring(selectionEnd);
    editor.value = `${prefix}${inserted}${suffix}`;
  
    const newSelectionStart = selectionStart + startTag.length;
    const newSelectionEnd = selectionEnd + startTag.length;
    editor.setSelectionRange(newSelectionStart, newSelectionEnd);
  
    editor.focus();
  }

  function insert_str(str) {
	  insert(str,"");
  }

  function successFunc() {
    //console.log(editor.value);
    success(editor.value);
  }

  function inputFunc(e) {
    //console.log(e.target.value);
  }

  function keypress_event(e) {
    //console.log("key press:" + e.key);
  }

  function keydown_event(e) {
    //console.log("key down:" + e.key);
    if (e.ctrlKey === false) {
      if (e.shiftKey === false) {
        if (e.key == "ArrowDown" || e.key == "Enter") {
        //if (e.key == "ArrowDown" ) {
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
        } else if (e.key == "ArrowRight") {
          //if( e.shiftKey || e.ctrlKey ) {
          table.navigateRight();
          e.preventDefault();
          e.stopPropagation();
        }
      } else {
      }
    } else {
      // e.ctrlKey == true
      const position = editor.selectionStart;
      //console.log(position);
      if (e.key == "Enter") {
        e.preventDefault();
        e.stopPropagation();
        ////insert("\n<strong>","</strong>")
        //insert("\n","")
        insert_str("\n")
      } else if (e.key == "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key == "ArrowLeft") {
        e.preventDefault();
        e.stopPropagation();
        const p = position - 1;
        editor.setSelectionRange(p, p);
      } else if (e.key == "ArrowRight") {
        e.preventDefault();
        e.stopPropagation();
        const p = position + 1;
        editor.setSelectionRange(p, p);
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
  editor.addEventListener("keydown", keydown_event);
  //editor.addEventListener('keyup', keyup_event);

  //return the editor element
  return editor;
};

