# SequelizedBurgerEater

### Before you Begin

1. Create a new folder called `sequelizedBurger`
2. Copy the contents of your completed assignment from last unit.
   * Remove the older git connection with `rm -R .git`.
   * Then connect this folder with a new github repo.
3. Run `sequelize init` to create the necessary files.

*STEP 2 didn't really go like this.*

#### Tier 1: Sequelized! (Basic to Moderate)

* Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.

* That means:

  * Replacing your MySQL `Burger` model with a Sequelized equivalent. *Think* I did this

    * Don't forget to edit the model and *initial migration file* (note to self, WTH is this?) to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs. *(WHAT? this doesn't work?? `defaultValue: false,`)
      * There's no option to include that default in the command line, so you'll need to open up your editor to make this change. *I have no idea what this means. Open WHAT editor?*
    * Don't forget to sync the models! *maybe i understand this*

    * Edit your new `config.json` file to include your database configurations. Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

    * Remove your old ORM file, as well as any references to it in `burgers_controller.js`. Replace those references with Sequelize's ORM methods.

* When you finish, your site should function just like your last one:
    ![1-Sequelized](Images/1-Sequelized.jpg)
    *Of course. Right.*