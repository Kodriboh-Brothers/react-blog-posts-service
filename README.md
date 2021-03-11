# Posts Service

The post service is responsible for creating and retrieving posts. Anytime a post is created the post service emits an event to the Event Bus.

# Running This Service

To run this service, execute <code> npm start </code> within the root directory of the service. 

## Routes

### GET

<pre>
<code>
    localhost:4000/posts
<code>
</pre>

#### Response

<pre>
<code>
    {
        "id": "3333af60",
        "title": "Dragons vs Magicians"
    }
</code>
</pre>

### POST

<pre>
<code>
    localhost:4000/posts
<code>
</pre>

#### Body

<pre>
<code>
    {
        "title": "Dragons vs Magicians"
    }
</code>
</pre>

#### Response

<pre>
<code>
    {
        "3333af60": {
            "id": "3333af60",
            "title": "Dragons vs Magicians"
        }
    }
</code>
</pre>

