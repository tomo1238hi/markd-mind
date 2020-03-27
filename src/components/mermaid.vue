<template>
  <div>
    <vue-mermaid v-bind:nodes='data' type='graph TB' @nodeClick='editNode' v-bind:config='mermaid'></vue-mermaid>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: [
        { id: '1', text: 'A', link: '---', next: ['2'], editable: true },
        { id: '2', text: 'B', edgeType: 'circle', next: ['3'] },
        { id: '3', text: 'C', next: ['4', '6'] },
        { id: '4', text: 'D', next: ['5'] },
        { id: '5', text: 'E' },
        { id: '6', text: 'F' },
        { id: '7', text: 'G', next: ['8', '9'] },
        { id: '8', text: 'H' },
        { id: '9', text: 'I' }
      ],
      mermaid: {
        theme: 'default',
        startOnLoad: !1,
        securityLevel: 'loose'
      }
    }
  },
  methods: {
    editNode (nodeId) {
      alert(nodeId)
    },
    clicktest () {
      alert('test')
    }
  }
}
</script>
