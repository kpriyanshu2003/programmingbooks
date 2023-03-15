function openNav() 
{
	if(screen.width<=450)
	{
		document.getElementById("mySidenav").style.width = "50%";
	}
	else
	{
		document.getElementById("mySidenav").style.width = "25%";
	}
}

function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
}