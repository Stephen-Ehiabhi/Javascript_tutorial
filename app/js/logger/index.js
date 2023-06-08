import $ from 'jquery';
export const console.log = content => $('#content').append("<i style = 'color: black' class = 'fa fa-terminal'> </i>  " + content + "<br>" );
export const console.logTitle = title => $('#title').append(title);
