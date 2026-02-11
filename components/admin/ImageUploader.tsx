'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import { useUploadThing } from '@/lib/uploadthing-components'
import { X, Upload, Loader2, ImageIcon, GripVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageUploaderProps {
  images: string[]
  onChange: (images: string[]) => void
  maxImages?: number
}

export function ImageUploader({ images, onChange, maxImages = 10 }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const { startUpload } = useUploadThing('propertyImageUploader', {
    onClientUploadComplete: (res) => {
      if (res) {
        const newUrls = res.map((file) => file.url)
        onChange([...images, ...newUrls])
      }
      setIsUploading(false)
      setUploadProgress(0)
    },
    onUploadError: (error) => {
      setError(error.message)
      setIsUploading(false)
      setUploadProgress(0)
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress)
    },
  })

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return

      // Check max images limit
      const remainingSlots = maxImages - images.length
      if (remainingSlots <= 0) {
        setError(`Maximum ${maxImages} images allowed`)
        return
      }

      const filesToUpload = acceptedFiles.slice(0, remainingSlots)

      setIsUploading(true)
      setError(null)

      try {
        await startUpload(filesToUpload)
      } catch (err) {
        setError('Upload failed. Please try again.')
        setIsUploading(false)
      }
    },
    [images.length, maxImages, startUpload]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    disabled: isUploading,
    maxFiles: maxImages - images.length,
  })

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    onChange(newImages)
  }

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images]
    const [movedImage] = newImages.splice(fromIndex, 1)
    newImages.splice(toIndex, 0, movedImage)
    onChange(newImages)
  }

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          transition-colors duration-200
          ${isDragActive ? 'border-accent bg-accent/5' : 'border-gray-300 hover:border-accent/50'}
          ${isUploading ? 'pointer-events-none opacity-60' : ''}
        `}
      >
        <input {...getInputProps()} />

        {isUploading ? (
          <div className="space-y-3">
            <Loader2 className="h-10 w-10 text-accent mx-auto animate-spin" />
            <p className="text-sm text-gray-600">Uploading... {uploadProgress}%</p>
            <div className="w-full max-w-xs mx-auto bg-gray-200 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Upload className="h-6 w-6 text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {isDragActive ? 'Drop images here' : 'Drag & drop images here'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                or click to select files (max {maxImages - images.length} more)
              </p>
            </div>
            <p className="text-xs text-gray-400">
              PNG, JPG, WEBP up to 4MB each
            </p>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
          <button onClick={() => setError(null)} className="float-right">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Image previews */}
      {images.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Uploaded images ({images.length}/{maxImages})
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((url, index) => (
              <div
                key={url}
                className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden"
              >
                <Image
                  src={url}
                  alt={`Property image ${index + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {/* Move buttons */}
                  {index > 0 && (
                    <button
                      onClick={() => moveImage(index, index - 1)}
                      className="p-1.5 bg-white rounded-full text-gray-700 hover:bg-gray-100"
                      title="Move left"
                    >
                      <GripVertical className="h-4 w-4 rotate-90" />
                    </button>
                  )}

                  {/* Delete button */}
                  <button
                    onClick={() => removeImage(index)}
                    className="p-1.5 bg-red-500 rounded-full text-white hover:bg-red-600"
                    title="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {index < images.length - 1 && (
                    <button
                      onClick={() => moveImage(index, index + 1)}
                      className="p-1.5 bg-white rounded-full text-gray-700 hover:bg-gray-100"
                      title="Move right"
                    >
                      <GripVertical className="h-4 w-4 -rotate-90" />
                    </button>
                  )}
                </div>

                {/* First image badge */}
                {index === 0 && (
                  <div className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded">
                    Main
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            Drag images to reorder. The first image will be used as the main image.
          </p>
        </div>
      )}

      {/* Empty state */}
      {images.length === 0 && !isUploading && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <ImageIcon className="h-4 w-4" />
          <span>No images uploaded yet</span>
        </div>
      )}
    </div>
  )
}
