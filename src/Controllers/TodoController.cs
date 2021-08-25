using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Todobernetes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        // hack - temporary
        private static int _nextId = 1;
        private static readonly List<TodoItem> _items = new();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_items);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = _items.FirstOrDefault(x => x.Id == id);

            if (item == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(item);
            }
        }

        [HttpPost]
        public IActionResult Post(TodoItem item)
        {
            item.Id = _nextId;
            _nextId++;
            _items.Add(item);
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, TodoItem update)
        {
            var item = _items.FirstOrDefault(x => x.Id == id);

            if (item == null)
            {
                return NotFound();
            }
            else
            {
                item.Completed = update.Completed;
                return Ok(item);
            }
        } 

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _items.FirstOrDefault(x => x.Id == id);

            if (item != null)
            {
                _items.Remove(item);
            }

            return Ok();
        }
    }
}
