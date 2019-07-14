wp.blocks.registerBlockType('hitchandsparrow/blog-block', {
  title: 'H&S Blog Block',
  icon: 'camera',
  category: 'common',
  attributes: {
    blogtitle: {type: 'string'},
    blogdatelocation: {type: 'string'},
    blogbody: {type: 'string'}
  },
  edit: function(props) {
    // Creating Blog Title Fucntion
    function updateBlogTitle(event) {
      props.setAttributes({ blogtitle: event.target.value })
    }
    
    // Creating Blog Date/Location Fucntion
    function updateBlogDateLocation(event) {
      props.setAttributes({ blogdatelocation: event.target.value })
    }
    
    // Creating Blog Date/Location Function
    function updateBlogBody(event) {
      props.setAttributes({ blogbody: event.target.value })
    }

    return wp.element.createElement(
      "div",
      null,
      // Creating Blog Title
      wp.element.createElement("h2", null, "Blog Title"),
      wp.element.createElement("input", {
        type: "text",
        class: "wide-block",
        value: props.attributes.blogtitle,
        onChange: updateBlogTitle
      }),
      // Creating Blog Date/Location
      wp.element.createElement("h2", null, "Blog Date/Location"),
      wp.element.createElement("input", {
        type: "text",
        class: "wide-block",
        value: props.attributes.blogdatelocation,
        onChange: updateBlogDateLocation
      }),
      
      // Creating Blog Date/Location
      wp.element.createElement("h2", null, "Blog Body"),
      wp.element.createElement("textarea", {
        type: "text",
        class: "wide-block",
        value: props.attributes.blogbody,
        onChange: updateBlogBody
      }),
    );
  },

  save: function(props) {
    return React.createElement(
      "div",
      {
        class: "blog-post-details"
      },
      React.createElement(
        "div",
        {
          class: "blog-title"
        },
        props.attributes.blogtitle
      ),
      React.createElement(
        "div",
        {
          class: "blog-date-location"
        },
        props.attributes.blogdatelocation
      ),
      React.createElement(
        "div",
        {
          class: "blog-body"
        },
        props.attributes.blogbody
      )
    );
  }
})