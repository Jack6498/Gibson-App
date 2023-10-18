var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'font': [] }],
  [{ 'align': [] }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['blockquote'],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
];
var quill = new Quill('#editor', 
{
    theme:'snow',
    modules:{toolbar:toolbarOptions}
}
);