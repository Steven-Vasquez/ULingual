# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: 3.142.96.247
2. SSH username: ec2-user
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
    
    SSH Key Name: JojosULingualKey.pem (Uploaded)
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
    
    Database URL: database-1.cdfnojnzo4ui.us-east-2.rds.amazonaws.com
    
5. Database username (RDS): admin
6. Database password (RDS): Bobby2480.
7. Database name (basically the name that contains all your tables) : ULingualDB
8. Clear instructions with examples on how to use all the above information.

To acess the ec2 instance you will need to run these commands.
    1.)Download the .pem key uploaded.
    2.)Open your terminal and run the following commands.
        chmod 0400 <path to your .pem file>
        ssh -i <path to your .pem file> ec2-user@<public IPv4 Address of instance>
    This should give you access to the ec2 instance.
    I would then do the following command to have full control of instance.
        sudo su
    This will give you root access to the instance instead of being just a user.
    
    To login and Access the Database within the instance there are two ways.
    1.)To access the root user, type the following commands.
        mysql -u root -p
    This will prompt you to enter a password, for this user its Bobby2480.
        
    2.)To access from grander scale via adminAccess1, type the following commands.
        mysql -h <instance ip> -u adminAccess1 -p
    This wil prompt you to enter a password, for this adminAccess1 its Csc64805!
    
    You should now be able to reach the mysql access part within the instance.
    If you run,
        show databases;
    
    You should be able to see the ULingualDB in the instance.
        

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
