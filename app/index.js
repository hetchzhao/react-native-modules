const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('foo', { type: String, require: true });

    // this.argument('foo', { type: String, require: true });
    // this.argument('bar', { type: String, require: true });

    console.log(this.destinationRoot());
  }

  // async prompting() {
  //   this.answers = await this.prompt([{
  //     type: 'confirm',
  //     name: 'cool',
  //     message: 'Would you like to enable the Cool feature?',
  //     store: true
  //   }])
  // }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      {
        title: 'template with yoman'
      }
    )
  }
}