function menue(){
    document.write('<ul class="sf-menu">');
    document.write('<li class="current">');
    document.write('<a href="adminhome.php">Home Page</a>');
    document.write('</li>');
    document.write('<li>');
    document.write('<a href="#">Employee Details</a>');
    document.write('<ul>');
    document.write('<li><a href="add.php">Add New Employee</a></li>');
	 document.write('<li>');
    document.write('<li><a href="editk.php">Edit Employee Detail</a></li>');
    document.write('<li><a href="delete.php">Delete Employee</a></li>');
    document.write('</ul>');
    document.write('</li>');
    document.write('<li>');
    document.write('<a href="#">Salary Sheet</a>');
    document.write('<ul>');
    document.write('<li><a href="newsheet.php">Generate New Sheet</a></li>');
    document.write('<li><a href="updatesheet.php">Update Previous</a></li>');
    document.write('<li><a href="salarysheet.php">Final Sheet</a></li>');
    document.write('</ul>');
    document.write('</li>');
    document.write('<li>');
    document.write('<a href="#">Slips</a>');
    document.write('<ul>');
    document.write('<li><a href="slip.php">Salary Slip</a></li>');
    document.write('<li><a href="bankslip.php">Bank Slip</a></li>');
    document.write('</ul>');
    document.write('</li>');
    document.write('<li>');
    document.write('<a href="#">More Services</a>');
    document.write('<ul>');
    document.write('<li><a href="previous.php">Previous Salary Sheets</a></li>');
    document.write('<li><a href="backup.php">Backup</a></li>');
    document.write('<li><a href="rest.php">Rest Sheet</a></li>');
    document.write('<li><a href="updaterest.php">Update Rest Sheet</a></li>');
    document.write('</ul>');
    document.write('</li>');
    document.write('<li><a href="../checklogin/logout.php">Logout</a></li>');
    document.write('</ul>');
}
