# guttenbergcustomblockcodeexam

#QUESTION:
One of the client websites is down both on FE and BE, because of some
error on one of the plugins or themes. You only have access to the DB and
Files. What would you do?

#ANSWER:
When a client's website is down due to a plugin or theme error(possibly) and I only have access to the database and files (assuming I have access to FTP/SFTP), the first step is to ensure I create backups for both. This involves using the hosting control panel or an FTP/SFTP client to download the site files and exporting the database through tools like phpMyAdmin or ManageWP service if it is available. With backups secured, I would proceed to review the website's error logs for specific clues about the error. Since the issue is suspected to be with a plugin or theme, I would manually deactivate all plugins by renaming the plugins directory within wp-content via FTP. After this, I would check the site. If it's operational, it indicates a plugin is the issue. To isolate the problematic plugin, I would reactivate each one by one and monitor the site's response.

If disabling plugins doesn't resolve the issue, the next step is to switch to a default WordPress theme. This is done by renaming the current theme's folder in wp-content/themes, which prompts WordPress to revert to one of its default themes. If this action brings the site back, the theme is likely the cause.

If a specific plugin or theme is identified as the problem, I would then go into its files to check for any obvious errors. If a particular file is found to be corrupted, it would be replaced with an original version from a fresh download of the plugin or theme. If the steps I mentioned doesn't still provide good results, If the site remains down after all these troubleshooting steps, as a last resort, I would restore the website from the most recent backup. Once the website is back up, a detailed investigation into the cause of the issue would follow to prevent future occurrences, which would likely include updating all themes and plugins to their latest versions, checking for PHP version compatibility, and implementing recommended security measures.
