# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: http://50.18.108.83/
2. SSH username: ubuntu
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
    
    SSH Key Name: key.pem (Uploaded)
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
    
    Database URL: database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com
    
5. Database username (RDS): admin
6. Database password (RDS): password1
7. Database name (basically the name that contains all your tables) : t6db
8. Clear instructions with examples on how to use all the above information.

To acess the ec2 instance you will need to run these commands.
    
    1.)Download the .pem key uploaded.
    
    2.)Open your terminal and run the following commands.
        
        chmod 0400 <path to your .pem file>
    
        ssh -i <path to your .pem file> ubuntu@ec2-50-18-108-83.us-west-1.compute.amazonaws.com
    
    This should give you access to the ec2 instance.
    I would then do the following command to have full control of instance.
        sudo su
    This will give you root access to the instance instead of being just a user.
    
    To login and Access the Database within the instance there are two ways.
    1.)To access the database, type the following commands.
        mysql -h database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com -P 3306 -u admin -p
    This will prompt you to enter a password, for this user its password1.
        
    You should now be able to reach the mysql access part within the instance.
    If you run,
        show databases;
    
    You should be able to see the ULingualDB in the instance.

    2.)Accessing the database via MySQL Workbench.
    Select the Setup New Connection button.
    For your connection method, choose Standard TCP/IP over SSH.
    Under the Parameters tab, input the following information:
    SSH Hostname: ec2-50-18-108-83.us-west-1.compute.amazonaws.com
    SSH Username: ubuntu
    SSH Password: *No password, we'll be using the private key file below.*
    SSH Key File: <path to key.pem file in this credentials folder>
    MySQL Hostname: database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com
    MySQL Server Port: 3306
    Username: admin
    Password: password1
    Default Schema: t6db

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
