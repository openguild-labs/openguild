'use client'

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { stratify, tree } from 'd3-hierarchy'
import { ReactNode, useEffect, useState } from 'react'
import { Controls, Panel, ReactFlow, useEdgesState, useNodesState, useReactFlow } from 'reactflow'
import 'reactflow/dist/style.css'

const g = tree()

const getLayoutedElements = (nodes, edges, options) => {
  if (nodes.length === 0) return { nodes, edges }

  const { width, height } = (document as any)
    .querySelector(`[data-id="${nodes[0].id}"]`)
    .getBoundingClientRect()
  const hierarchy = stratify()
    .id((node) => (node as any).id)
    .parentId((node) => edges.find((edge) => edge.target === (node as any).id)?.source)
  const root = hierarchy(nodes)
  const layout = g.nodeSize([width, height])(root)

  return {
    nodes: layout
      .descendants()
      .map((node) => ({ ...(node.data as any), position: { x: node.x, y: node.y } })),
    edges,
  }
}
interface Props {
  children: ReactNode
}

export default function FlowViewContainer({
  title,
  nodes: initialNodes,
  edges: initialEdges,
}: {
  title: string
  nodes: {
    id: string
    data: { label: string }
    position: { x: number; y: number }
    className: string
  }[]
  edges: { id: string; source: string; target: string; animated: boolean }[]
}) {
  const { fitView } = useReactFlow()
  const [mounted, setMounted] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  useEffect(() => {
    if (!mounted) return
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges, {
      direction: 'vertical',
    })

    setNodes([...layoutedNodes])
    setEdges([...layoutedEdges])
  }, [mounted])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      fitView()
    })
  }, [nodes, edges, mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="bg-gray-900"
      style={{
        height: 200,
        backgroundColor: 'white',
        backgroundImage: `radial-gradient(#767C88 5%, transparent 0)`,
        backgroundSize: '20px 20px',
        borderRadius: 10,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        draggable={false}
      ></ReactFlow>
    </section>
  )
}
