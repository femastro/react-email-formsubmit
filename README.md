# react-email-formsubmit
https://formsubmit.co/

<form action="https://formsubmit.co/your@email.com" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <button type="submit">Send</button>
</form>

![image](https://github.com/femastro/react-email-formsubmit/assets/38165979/8daee5bc-7a6a-4c12-ab40-43eb9aaf4187)

![image](https://github.com/femastro/react-email-formsubmit/assets/38165979/d3b10081-8275-421c-9072-a095de4d8b35)


# After download:
npm i

# Hosting
the .htaccess, for production, has to be in the root folder of the public_html.

# add these lines in the file

Options -MultiViews \n
RewriteEngine On \n
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]




