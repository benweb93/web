var Todo = Backbone.Model.extend({

});

var Todos = Backbone.Collection.extend({
    model: Todo
});

var todos = new Todos();

var ItemView = Backbone.View.extend({
    tagName: "li",
    template : _.template($("#template").html()),
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    initialize: function () {
        this.listenTo(this.model, 'remove', this.remove);
    },
    events: {
        "click .box": "clear"
    },
    clear: function () {
        todos.remove(this.model);
    }
});

var AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
        this.listenTo(todos, 'add', this.addOne);
    },
    addOne: function(todo) {
        var view = new ItemView({
            model: todo
        });
        this.$(".element").append(view.render().el);
    },
    events: {
        "keypress .input": "create"
    },
    create: function (e) {
if(e.keyCode == 13){
        var model = new Todo({
            title: this.$('.input').val()

        });
        todos.add(model);
        $(".input").val(" ");
}
  }
})
var student = Backbone.Model.extend({
  defaults :{
    Code : "1010",
    Name : "zhang ben",
    Score : "80"
  }
});
var studentlist = Backbone.Collection.extend({
  initialize : function(Model,options){
    this.on("add",options.view.showmodel);
  }
});

var studentVeiw = Backbone.View.extend({
  el : $("body"),

  initialize :  function(){
this.stu1 = new studentlist(null,{view : this})
 },
//template : _.template($('#stus-tpl').html()),
  events : {
    "click #btnSubmit" : "addmodel",
    "dblclick span" : "editing",
    "blur .edited" : "blur"
  },
  addmodel : function(){
    var stum = new student({
    Code : $("#txtCode").val(),
    Name : $("#txtName").val(),
    Score : $("#txtScore").val()
  });
  //  var stu1 = new studentlist(null,{view : stum});
this.stu1.add(stum);
  $(".input1").val(" ");
},
editing : function(e){
  $(e.currentTarget).removeClass("show").addClass("editing").find('input,select').focus();
},
blur : function(e){

var $curele=$(e.currentTarget);
var objData ={
Code : $("#txtCode").val(),
Name : $("#txtName").val(),
Score : $("#txtScore").val()
}
objData[$curele.attr('name')] = $curele.val();
this.stu1.set(objData);
$(e.currentTarget).parent().parent().removeClass("editing").add("show");
},
showmodel : function(model){
  this.template=_.template($("#stus-tpl").html());
  $("#ulshowstus").append(this.template(model.toJSON()));
}
})
var app = new AppView();
var stu1 = new studentVeiw();
