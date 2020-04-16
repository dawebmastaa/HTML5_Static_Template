function ajaxLoader(url,id)
{
  if (document.getElementById)
  {
    var x = new XMLHttpRequest();
  }

  if (x)
  {
    x.onreadystatechange = function()
    {
      if (x.readyState == 4)
      {
        el = document.getElementById(id);
        el.innerHTML = x.responseText;
      }
    }
    x.open("GET", url, true);
    x.send(null);
  }
}
